import Moment from 'moment';
import MomentRange from 'moment-range';
const {extendMoment} = MomentRange
const moment = extendMoment(Moment);


// BEGIN-SNIPPET grouped-bar-chart-example

import Controller from '@ember/controller';

import {computed} from '@ember/object';
import _ from 'lodash';
import {max} from 'd3-array';

let generateData = function () {
  let end = moment('2015-03-14');
  let numDays = _.random(2, 8);
  let start = end.clone().subtract(numDays, 'days');
  let dateRange = moment.range(start, end);
  let series = ['series 1', 'series 2', 'series 3', 'series 4', 'series 5', 'series 6', 'series 7'];
  let valueType = 'W';
  let seriesSample = _.sampleSize(series, _.random(2, _.size(series)));

  return Array
    .from(dateRange.by('days', {exclusive: true}))
    .map(d => {
      let seriesData = seriesSample.map(s => {
        return {
          name: s,
          value: _.random(1000, 10000)
        };
      });
      return {
        ts: d.toDate(),
        [valueType]: seriesData
      };
    });
};


export default Controller.extend({
  transitionDuration: 500,

  init() {
    this._super(...arguments);
    this.set('barData', generateData());
  },

  outputMax: computed('barData', function () {
    let data = this.get('barData');
    let outputKey = 'W';
    return Math.ceil(max(data, ({[outputKey]: o}) => max(o, ({value}) => value)));
  }),

  groupDomain: computed('barData', function () {
    let data = this.get('barData');
    let [firstGroup] = data;
    let values = firstGroup['W'].sort(({name: a}, {name: b}) => {
      return a > b;
    });
    return values.map(({name}) => name);
  }),

  actions: {
    toggleData() {
      this.set('barData', generateData());
    }
  }

});

// END-SNIPPET
