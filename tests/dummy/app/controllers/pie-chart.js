// BEGIN-SNIPPET pie-chart-example

import Controller from '@ember/controller';
import _ from 'lodash';

let generateData = function() {
  return _.range(_.random(3, 8)).map((k, idx) => {
    return {
      name: `${idx + 1}`,
      sites: _.random(1, 10000)
    }
  })
};

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('pieData', generateData());
  },
  
  actions: {
    toggleData() {
      this.set('pieData', generateData());
    }
  }
});

// END-SNIPPET
