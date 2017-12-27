/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  var app = new EmberAddon(defaults, {
    snippetPaths: ['tests/dummy/snippets'],
    snippetSearchPaths: ['app', 'tests/dummy/app', 'addon'],
    babel: {
      plugins: ['transform-object-rest-spread', 'transform-decorators-legacy'],
      blacklist: ['regenerator']

    }
  });

  // app.import('node_modules/moment/moment.js');
  app.import('node_modules/moment-range/dist/moment-range.js', {
    exports: {"moment-range": ['default','extendMoment','DataRange']}
  });
  app.import('vendor/shims/moment-range.js');

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
