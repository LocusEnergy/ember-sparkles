import Ember from 'ember';
import dateify from 'dummy/utils/dateify';
import { groupedTimeseriesDataOne, groupedTimeseriesDataTwo } from 'dummy/utils/fixture-data';
import _ from 'lodash/lodash';
import { max } from 'd3-array';

let dataCollection = new Ember.A([ dateify(groupedTimeseriesDataOne), dateify(groupedTimeseriesDataTwo) ]);

export default Ember.Controller.extend({
  padding: 0.2,
  margin: {
    top: 20,
    right: 25,
    bottom: 20,
    left: 45,
  },
  dataIdx: 0,
  barData: dataCollection,

  data: Ember.computed('dataIdx', 'barData', function() {
    let idx = this.get('dataIdx');
    return this.get('barData').objectAt(idx);
  }),

  yMax: Ember.computed('data', function() {
    let data = this.get('data');
    return max(data, function(d) {
      return max(d['Wh_sum'], (t) => t.value)
    })
  }),

  actions: {
    toggleData() {
      let idx = this.get('dataIdx');
      let [ newIdx ] = _.without([1, 0], idx);
      this.set('dataIdx', newIdx);
    }
  }

});
