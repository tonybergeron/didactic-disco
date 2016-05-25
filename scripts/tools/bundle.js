/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import q from 'q'
import webpack from 'webpack'
import webpackConfig from '../../client/webpack/config.dist.js'

/**
 * Creates application bundles from the source files.
 */
async function bundle() {
  await new q.Promise((resolve, reject) => {
    webpack(webpackConfig).run((err, stats) => {
      if (err) {
        return reject(err)
      }
      console.log('Client Files Built Successfully')
      return resolve()
    })
  })

  const ncp = q.denodeify(require('ncp'))
  await q.all([
    ncp('server', 'build-server/server'),
    ncp('package.json', 'build-server/package.json'),
    ncp('Procfile', 'build-server/Procfile')
  ]).then(() => {
    console.log('Server Files Built Successfully')
  });
}

export default bundle
