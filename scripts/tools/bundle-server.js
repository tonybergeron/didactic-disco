/**
 * Moves the Server Files to a deployable location
 */
import q from 'q';

async function copyServerFiles() {
  const ncp = q.denodeify(require('ncp'))
  await q.all([
    ncp('server', 'build-server/server'),
    ncp('package.json', 'build-server/package.json'),
    ncp('Procfile', 'build-server/Procfile')
  ]);
}

export default copyServerFiles
