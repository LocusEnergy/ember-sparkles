import Ember from 'ember';
import _ from 'lodash/lodash';
import { extent, min, max } from 'd3-array';

let generateData = function() {
  let end = moment('2015-03-14');
  let numDays = _.random(10, 50);
  let start = end.clone().subtract('days', numDays);
  let dateRange = moment.range(start, end);
  let series = _.range(4);
  let valueType = 'Wh_sum';
  let seriesSample = _.sample(series, _.random(2, _.size(series)));

  return seriesSample.map(seriesName => {
    return {
      id: seriesName,
      datatype: valueType,
      data: dateRange.toArray('days').map(d => {
        return {
          ts: d.toDate(),
          [valueType]: _.random(10, 1000)
        };
      })
    };
  });
};

export default Ember.Controller.extend({
  init() {
    this.set('timeseriesData', generateData());
  },

  domain: Ember.computed('timeseriesData', function() {
    let domains = this.get('timeseriesData').map(({ data }) => extent(data, ({ ts }) => ts));
    return domains[0];
  }),

  valueAccessor: function({ Wh_sum }) {
    return Wh_sum;
  },

  range: Ember.computed('timeseriesData', function() {
    let data = this.get('timeseriesData');
    let valueAccessor = this.get('valueAccessor');
    let minimum = min(data, ({ data: d }) => min(d, valueAccessor));
    let maximum = max(data, ({ data: d }) => max(d, valueAccessor));
    return [ minimum, maximum ];
  }),

  actions: {
    toggleData() {
      this.set('timeseriesData', generateData());
    }
  }
});
