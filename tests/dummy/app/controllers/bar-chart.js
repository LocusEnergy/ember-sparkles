import Ember from 'ember';
import { barData } from 'dummy/utils/fixture-data';

export default Ember.Controller.extend({
  padding: 0.02,
  dataIdx: 3,
  barData: new Ember.A(barData),

  // will need to update this property when we handle multiple series
  data: Ember.computed('barData', 'dataIdx', function() {
    let b = this.get('barData');
    let idx = this.get('dataIdx');
    let result = b.filterBy('id', idx);
    return result[0];
  }),

  actions: {
    toggleData() {
      let ids = this.get('barData').mapBy('id');
      let dataIdx = this.get('dataIdx');
      let nonPlotted = ids.filter(idx => idx !== dataIdx);
      let newRandom = nonPlotted[Math.floor(Math.random() * nonPlotted.length)];
      this.set('dataIdx', newRandom);
    }
  }
});
