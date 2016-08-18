// BEGIN-SNIPPET bar-chart-example

import Ember from 'ember';
import dateify from 'dummy/utils/dateify';
import { timeseriesData } from 'dummy/utils/fixture-data';
import { max } from 'd3-array';

let dateified = timeseriesData.map(t => {
  t.data = dateify(t.data);
  return t;
});

export default Ember.Controller.extend({
  padding: 0.02,
  dataIdx: 1,
  barData: new Ember.A(dateified),

  data: Ember.computed('barData', 'dataIdx', function() {
    let b = this.get('barData');
    let idx = this.get('dataIdx');
    let result = b.filterBy('id', idx);
    return result[0].data;
  }),

  outputMax: Ember.computed('data', function() {
    let data = this.get('data');
    return max(data, ({ value }) => value);
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

// END-SNIPPET
