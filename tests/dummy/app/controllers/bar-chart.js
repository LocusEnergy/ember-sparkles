// BEGIN-SNIPPET bar-chart-example

import { computed } from '@ember/object';

import { A } from '@ember/array';
import Controller from '@ember/controller';
import dateify from 'dummy/utils/dateify';
import { timeseriesData } from 'dummy/utils/fixture-data';
import { max } from 'd3-array';

let dateified = timeseriesData.map(t => {
  t.data = dateify(t.data);
  return t;
});

const barData = new A(dateified);

export default Controller.extend({
  padding: 0.02,
  dataIdx: 1,
  barData: barData,

  data: computed('barData', 'dataIdx', function() {
    let b = this.get('barData');
    let idx = this.get('dataIdx');
    let result = b.filterBy('id', idx);
    return result[0].data;
  }),

  outputMax: computed('data', function() {
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
