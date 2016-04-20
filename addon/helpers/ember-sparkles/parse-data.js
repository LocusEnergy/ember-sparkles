import Ember from 'ember';
import { isoParse } from 'd3-time-format';

export function emberSparklesParseData([ data ]) {
  return data.map(([x, y]) => [ isoParse(x), y] );
}

export default Ember.Helper.helper(emberSparklesParseData);
