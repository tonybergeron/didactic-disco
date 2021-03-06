/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import del from 'del';
import fs from './lib/fs';

/**
 * Cleans up the output (build) directory.
 */
async function clean() {
  // Remove everything except any .git folders
  await del(['.tmp', 'build/*', '!build/.git'], { dot: true });
  await del(['.tmp', 'build-server/*', '!build-server/.git'], { dot: true });

  // Create our build folders
  await fs.makeDir('build');
  await fs.makeDir('build-server');
}

export default clean;
