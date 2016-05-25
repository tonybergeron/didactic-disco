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
import webpackConfig from '../../webpack/config.dist.js'

/**
 * Creates application bundles from the source files.
 */
function bundleClient() {
  return new q.Promise((resolve, reject) => {
    webpack(webpackConfig).run((err, stats) => {
      if (err) {
        return reject(err)
      }
      console.log('Built Successfully')
      return resolve()
    })
  })
}

export default bundleClient
