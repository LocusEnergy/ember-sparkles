import Moment from 'moment';
import MomentRange from 'moment-range';

const {extendMoment} = MomentRange
const moment = extendMoment(Moment);

// BEGIN-SNIPPET line-chart-example

import {computed} from '@ember/object';

import Controller from '@ember/controller';
import _ from 'lodash';
import {extent, min, max} from 'd3-array';

let generateData = function () {
  let end = moment('2015-03-14');
  let numDays = _.random(30, 52);
  let start = end.clone().subtract(numDays, 'days');
  let dateRange = moment.range(start, end);
  let series = _.range(4);
  let valueType = 'Wh_sum';
  let seriesSample = _.sampleSize(series, _.random(2, _.size(series)));

  return seriesSample.map(seriesName => {
    return {
      series: `series ${seriesName}`,
      datatype: valueType,
      data: Array.from(dateRange.by('days', {exclusive: true}))
        .map(d => {
          return {
            ts: d.toDate(),
            [valueType]: Math.random() * Math.sin(d.utc())
          };
        })
    };
  });
};

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('timeseriesData', generateData());
  },

  xDomain: computed('timeseriesData', function () {
    let domains = this.get('timeseriesData').map(({data}) => extent(data, ({ts}) => ts));
    return domains[0];
  }),

  valueKey: function ({Wh_sum}) {
    return Wh_sum;
  },

  yDomain: computed('timeseriesData', function () {
    let data = this.get('timeseriesData');
    let valueKey = this.get('valueKey');
    let minimum = min(data, ({data: d}) => min(d, valueKey));
    let maximum = max(data, ({data: d}) => max(d, valueKey));
    return [minimum, maximum];
  }),

  actions: {
    toggleData() {
      this.set('timeseriesData', generateData());
    }
  }
});

// END-SNIPPET
