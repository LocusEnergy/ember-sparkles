import Ember from 'ember';
import _ from 'lodash/lodash';

let generateData = function() {
  let keys = [];
  let numberOfKeys = _.random(3, 8);
  for (var i = 1; i < numberOfKeys; i++){
    keys.push("Arc "+i);
  }
  return keys.map( key => {
      return {
        key,
        value: _.random(1, 10000)
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
