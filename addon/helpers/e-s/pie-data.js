import { helper } from '@ember/component/helper';
import { A } from '@ember/array';
import _ from 'lodash';

export function pieData([ data ], { valueKey, threshold=5, precision=1 }) {
  let total = _.sum(A(data).mapBy(valueKey));

  return data.map(d => {
    let ratio = d[valueKey] / total;
    if (ratio >= threshold * 0.01) {
      let percentage = (ratio * 100).toFixed(precision);
      return { percentage, ...d };
    } else {
      return d;
    }
  })
}

export default helper(pieData);
