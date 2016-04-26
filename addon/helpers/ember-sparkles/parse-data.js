import Ember from 'ember';
import { isoParse } from 'd3-time-format';

export function emberSparklesParseData([ data ], { hKey, vKey }) {
  return data.map(({ [hKey]: x, [vKey]: y }) => {
    return { [hKey]: isoParse(x), [vKey]: y };
  });
}

export default Ember.Helper.helper(emberSparklesParseData);
