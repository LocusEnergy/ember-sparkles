import Ember from 'ember';
import _ from 'lodash/lodash';

let generateData = function() {
  let ages = ['arc 1', 'arc 2', 'arc 3', 'arc 4', 'arc 5', 'arc 6'];
  return ages.map( age => {
      return {
        age,
        population: _.random(1, 100)
      };
  });
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
