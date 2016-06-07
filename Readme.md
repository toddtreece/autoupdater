# autoupdater

Make your CLI npm modules auto-update themselves.

### Installation

Requires the latest stable version of Node.js. v6.x or higher.

```
$ npm install cli-autoupdate --save
```

### Features

- Uses battle-tested [update-notifier](https://npmjs.org/package/update-notifier)
- Installs new versions in the background
- Emits `update` event to notify you of the start of an update
- Emits `finish` event to notify you of the completion of the update (or if no update is needed)

### Usage

```js
const AutoUpdate = require('cli-autoupdate');

// load package.json of the package you wish to update
let pkg = require('path/to/package.json');

const update = new AutoUpdate(pkg);

update.on('update', () => console.log('started update'));
update.on('finish', () => console.log('finished updating'));
```

### License

MIT © [Vadym Demedes](http://vadimdemedes.com)
Modified Work © [Todd Treece](https://uniontownlabs.org)
