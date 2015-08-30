'use strict';

/**
 * Dependencies
 */

var update = require('./');


/**
 * Auto-update some module
 */

var pkg = require('./package.json');

update(pkg);
