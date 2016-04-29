import Ember from 'ember';
import dateify from 'dummy/utils/dateify';
import { timeseriesData } from 'dummy/utils/fixture-data';

let dateified = timeseriesData.map(t => {
  t.data = dateify(t.data);
  return t
});

export default Ember.Controller.extend({
  padding: 0.02,
  dataIdx: 1,
  barData: new Ember.A(dateified),
  margin: {
    top: 20,
    right: 25,
    bottom: 20,
    left: 45,
  },

  // will need to update this property when we handle multiple series
  data: Ember.computed('barData', 'dataIdx', function() {
    let b = this.get('barData');
    let idx = this.get('dataIdx');
    let result = b.filterBy('id', idx);
    return result[0].data;
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
