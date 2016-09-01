// BEGIN-SNIPPET pie-chart-example

import Ember from 'ember';
import _ from 'lodash/lodash';

let generateData = function() {
  return _.range(_.random(3, 8)).map((k, idx) => {
    return {
      name: `${idx + 1}`,
      sites: _.random(1, 10000)
    }
  })
};

export default Ember.Controller.extend({
  init() {
    this.set('pieData', generateData());
  },
  arcThreshold: 10,
  actions: {
    toggleData() {
      this.set('pieData', generateData());
    }
  }
});

// END-SNIPPET
