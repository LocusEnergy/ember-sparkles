import Ember from 'ember';
import _ from 'lodash/lodash';
import { max } from 'd3-array';

const { computed } = Ember;

let generateData = function() {
  let end = moment('2015-03-14');
  let numDays = _.random(2, 8);
  let start = end.clone().subtract(numDays, 'days');
  let dateRange = moment.range(start, end);
  let series = ['series 1', 'series 2', 'series 3', 'series 4', 'series 5', 'series 6', 'series 7'];
  let valueType = 'W';

  let seriesSample = _.sample(series, _.random(2, _.size(series)));

  return dateRange.toArray('days').map(d => {
    let seriesData = seriesSample.map(s => {
      return {
        name: s,
        value: _.random(10, 1050)
      };
    });
    return {
      ts: d.toDate(),
      [valueType]: seriesData
    };
  });
};

export default Ember.Controller.extend({
  init() {
    this.set('barData', generateData());
  },

  groupSortFunction({ name: a }, { name: b }) {
    return a > b;
  },

  outputMax: computed('barData', function() {
    let data = this.get('barData');
    let outputKey = 'W';
    return Math.ceil(max(data, ({ [outputKey]: o }) => max(o, ({ value }) => value)));
  }),

  groupDomain: computed('barData', function() {
    let data = this.get('barData');
    let [ firstGroup ] = data;
    let values = firstGroup['W'].sort(this.get('sortFn'));
    return values.map(({ name }) => name);
  }),

  actions: {
    toggleData() {
      this.set('barData', generateData());
    }
  }

});
