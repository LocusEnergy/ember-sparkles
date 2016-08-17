import Ember from 'ember';
import _ from 'lodash/lodash';

let generateData = function() {
  return _.range(_.random(3, 8)).map((k, idx) => {
    return {
      name: `Arc ${idx}`,
      value: _.random(1, 10000)
    }
  })
};

export default Ember.Controller.extend({
  init() {
    this.set('pieData', generateData());
  },
  actions: {
    toggleData() {
      this.set('pieData', generateData());
    }
  }
});
