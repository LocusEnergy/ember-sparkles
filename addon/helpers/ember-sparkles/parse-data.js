import Ember from 'ember';

let dateFormatFn = d3.time.format.iso.parse;

export function emberSparklesParseData([ data ]) {
  return data.map(([x, y]) => [dateFormatFn(x), y]);
}

export default Ember.Helper.helper(emberSparklesParseData);
