/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import q from 'q'
import GitRepo from 'git-repository';
import run from './run';
import fetch from './lib/fetch';

// TODO: Update deployment URL
// For more information visit http://gitolite.com/deploy.html
const getRemote = (slot) => ({
  name: `ancient-falls-46347`,
  url: `https://git.heroku.com/ancient-falls-46347.git`,
  website: `http://ancient-falls-46347.herokuapp.com`,
  bucket: `brownbag-bucket-dev-build`
});

/**
 * Deploy the contents of the `/build-server` folder to a remote
 * server via Git. Example: `npm run deploy -- production`
 */
async function deployServer() {
  // By default deploy to the staging deployment slot
  // const remote = getRemote(process.argv.includes('--production') ? null : 'staging');
  const remote = getRemote(process.argv.includes('--production') ? null : null);

  // Initialize a new Git repository inside the `/build-server` folder
  // if it doesn't exist yet
  const repo = await GitRepo.open('build-server', { init: true });
  await repo.setRemote(remote.name, remote.url);

  // Fetch the remote repository if it exists
  if ((await repo.hasRef(remote.url, 'master'))) {
    await repo.fetch(remote.name);
    await repo.reset(`${remote.name}/master`, { hard: true });
    await repo.clean({ force: true });
  }

  // Build the project in RELEASE mode which
  // generates optimized and minimized bundles
  process.argv.push('--release');

  // Clean and Build the build folders, removing dead files, updating new files
  await run(require('./build'));

  // Push the contents of the Build folder to the remote AWS Server
  await new q.Promise((resolve, reject) => {
    const spawn = require('child_process').spawn

    var command = spawn('sh', [ 'scripts/sync-folder-to-bucket.sh', 'build', remote.bucket], {});
    command.stdout.on('data', function(data) {
      console.log(data.toString())
    });
    command.stdout.on('exit', function(err) {
      return reject(err)
    });
    command.stdout.on('close', function(data) {
      return resolve()
    });
  })

  // Push the contents of the build-server folder to the remote server via Git
  await repo.add('--all .');
  await repo.commit('Update');
  await repo.push(remote.name, 'master');

  // Check if the site was successfully deployed
  const response = await fetch(remote.website);
  console.log(`${remote.website} -> ${response.statusCode}`);
}

export default deployServer;
