import Ember from 'ember';
import _ from 'lodash/lodash';
import { dailyData, weeklyDataA, weeklyDataB } from 'dummy/utils/timeseries-data';
import dateify from 'dummy/utils/dateify';
import { extent, min, max } from 'd3-array';

const timeseries = [
  {
    id: 'ts_1',
    data: dateify(dailyData),
    datatype: 'Wh_sum',
    interval: 'daily'
  },
  {
    id: 'ts_2',
    data: dateify(weeklyDataA),
    datatype: 'Wh_sum',
    interval: 'weekly'
  },
  {
    id: 'ts_1',
    data: dateify(weeklyDataB),
    datatype: 'Wh_sum',
    interval: 'weekly'
  }
];

let filterTimeseries = function(interval) {
  return _.filter(timeseries, 'interval', interval);
}

export default Ember.Controller.extend({
  margin: {
    top: 20,
    right: 25,
    bottom: 20,
    left: 95,
  },

  timeseriesData: filterTimeseries('weekly'),

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
      let { length } = this.get('timeseriesData');
      if (length === 1) {
        this.set('timeseriesData', _.filter(timeseries, 'interval', 'weekly'));
      } else {
        this.set('timeseriesData', _.filter(timeseries, 'interval', 'daily'));
      }
    }
  }
});
