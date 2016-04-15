/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-sparkles',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/d3/d3.js');
  }
};
