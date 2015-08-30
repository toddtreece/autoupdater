# autoupdater

Make your npm modules auto-update themselves.
Created for CLI programs in mind.


### Installation

```
$ npm install autoupdater --save
```


### Features

- Uses battle-tested [update-notifier](https://npmjs.org/package/update-notifier)
- Installs new versions in the background, does not block main process
- Update continues installation, even if main process dies


### Usage

```js
const update = require('autoupdater');

// load package.json of the package
// you want to be auto-updated
let pkg = require('path/to/package.json');


// execute autoupdater
// it checks for latest version on npm
// and if there's a newer one
// it executes `npm install` in background
update(pkg);
```


### License

MIT © [Vadym Demedes](http://vadimdemedes.com)
