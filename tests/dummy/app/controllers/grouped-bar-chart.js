import Ember from 'ember';
import _ from 'lodash/lodash';

let generateData = function() {
  let end = moment('2015-03-14');
  let numDays = _.random(2, 25);
  let start = end.clone().subtract('days', numDays);
  let dateRange = moment.range(start, end);
  let series = ['series 1', 'series 2', 'series 3', 'series 4', 'series 5', 'series 6', 'series 7'];
  let valueType = 'Wh_sum';

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
  groupSortFunction({ name: a }, { name: b }) {
    return a > b;
  },

  init() {
    this.set('barData', generateData());
  },

  actions: {
    toggleData() {
      this.set('barData', generateData());
    }
  }

});
