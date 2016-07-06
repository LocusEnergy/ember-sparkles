import Ember from 'ember';
import _ from 'lodash/lodash';

let generateData = function() {
  let keys = [];
//   let keys = [
//     {
//       key: 'arc 1',
//       value: 50
//     },{
//       key: 'arc 2',
//       value: 50
//     }, {
//       key: 'arc 3',
//       value: 50
//     }
//   ];
// return keys;
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
