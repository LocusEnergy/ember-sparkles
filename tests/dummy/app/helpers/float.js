import { helper } from '@ember/component/helper';
const { pow, round } = Math;

export function float([ value, precision = 0 ]) {
  let f = pow(10, precision);
  return round(value * f) / f;
}

export default helper(float);
