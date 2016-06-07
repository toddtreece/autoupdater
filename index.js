'use strict';

const UpdateNotifier = require('update-notifier'),
      EventEmitter = require('events'),
      spawn = require('child_process').spawn;

class AutoUpdate extends EventEmitter {

  constructor(pkg) {

    super();

    this.pkg = pkg;
    this.updating = false;

    this.notifier = UpdateNotifier({
      pkg: pkg,
      callback: (err, info) => this.onCheck(err, info)
    });

  }

  onCheck(err, info) {

    if(err)
      return this.emit('error', err);

    if(info.type != 'latest')
      this.update();
    else
      this.emit('finish');

  }

  update() {

    this.updating = true;
    this.emit('update');

    const options = {
      env: process.env
    };

    const args = [
      'install',
      '--global',
      this.pkg.name
    ];

    const npm = spawn(
      'npm',
      args,
      options,
      this.onUpdate.bind(this)
    );

  }

  onUpdate() {

    this.updating = false;
    this.emit('finish');

  }

}

exports = module.exports = AutoUpdate;
