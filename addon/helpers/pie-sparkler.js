import Ember from 'ember';
import _ from 'lodash';

export function pieSparkler([ data ], { dataKey, threshold=5, precision=1 }) {
  let total = _.sum(data.map(({ [dataKey]: d }) => d));

  return data.map(d => {
    let ratio = d[dataKey] / total;
    if (ratio >= threshold * 0.01) {
      let percentage = (ratio * 100).toFixed(precision);
      return { percentage, ...d };
    } else {
      return d;
    }
  })
}

export default Ember.Helper.helper(pieSparkler);
