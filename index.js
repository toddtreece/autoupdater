'use strict';

/**
 * Dependencies
 */

var updateNotifier = require('update-notifier');
var spawn = require('child_process').spawn;


/**
 * Expose autoupdater
 */

module.exports = autoupdater;


/**
 * Autoupdater
 */

function autoupdater (pkg) {
  var notifier = updateNotifier({
    pkg: pkg
  });

  if (notifier.update) {
    var options = {
      env: process.env
    };

    var args = [
      'install',
      '--global',
      pkg.name
    ];

    spawn('npm', args, options, noop).unref();
  }
}


/**
 * Utilities
 */

function noop () {}
