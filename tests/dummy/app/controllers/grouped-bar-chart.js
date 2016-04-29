import Ember from 'ember';
import dateify from 'dummy/utils/dateify';
import { parallelTimeseriesData } from 'dummy/utils/fixture-data';
import _ from 'lodash/lodash';
import { max } from 'd3-array';

let dateified = parallelTimeseriesData.map(t => {
  t.ts = new Date(t.ts);
  return t
});

export default Ember.Controller.extend({
  padding: 0.02,
  margin: {
    top: 20,
    right: 25,
    bottom: 20,
    left: 45,
  },
  data: new Ember.A(dateified),
  yMax: Ember.computed('data', function() {
    let data = this.get('data');
    return max(data, function(d) {
      return max(d['Wh_sum'], (t) => t.value)
    })
  })

});
