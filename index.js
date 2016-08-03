/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-sparkles',
  included: function(app) {
    if (app.app) {
      app = app.app;
    }
    this.app = app;

    this._super.included.apply(this, arguments);
  }
};
