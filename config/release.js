/* jshint node:true */
// var RSVP = require('rsvp');

// For details on each option run `ember help release`
module.exports = {
  init: function() {
    this._previousVersion = require('../package.json').version;
  },

  afterPush: function(project, tags) {
    runCommand('ember genie:changelog --write=true --version=' + this._previousVersion + ' --new-version=' + tags.next, true);
  },

  afterPublish: function(project, versions) {
    runCommand('ember github-pages:commit --message "Released ' + versions.next + '"', true);
    runCommand('git push origin gh-pages:gh-pages', true);
  },
  // local: true,
  // remote: 'some_remote',
  // annotation: "Release %@",
  // message: "Bumped version to %@",
  // manifest: [ 'package.json', 'bower.json', 'someconfig.json' ],
  // publish: true,
  // strategy: 'date',
  // format: 'YYYY-MM-DD',
  // timezone: 'America/Los_Angeles',
  //
  // beforeCommit: function(project, versions) {
  //   return new RSVP.Promise(function(resolve, reject) {
  //     // Do custom things here...
  //   });
  // }
};
