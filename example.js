const AutoUpdate = require('./index');

// load package.json of the package
// you want to be auto-updated
let pkg = require('./package.json');

const update = new AutoUpdate(pkg);

// wait for update to finish
update.on('finish', () => console.log('finished updating'));
