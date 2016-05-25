// Local: http://docs.aws.amazon.com/cli/latest/userguide/installing.html
// sudo easy_install pip
// sudo pip install awscli

import q from 'q'
import run from './run';

// TODO: Update deployment URL
// For more information visit http://gitolite.com/deploy.html
const getBucket = (slot) => ({
  bucket: `its-doge-oclock-somewhere-dev-build`
});

/**
 * Deploy the contents of the `/build-server` folder to a remote
 * server via Git. Example: `npm run deploy -- production`
 */
async function deployClient() {
  return new q.Promise((resolve, reject) => {
    const spawn = require('child_process').spawn

    var command = spawn('sh', [ 'scripts/sync-folder-to-bucket.sh', 'build', 'its-doge-oclock-somewhere-dev-build'], {});
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
}

export default deployClient;
