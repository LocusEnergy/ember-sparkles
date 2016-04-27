import Ember from 'ember';
import { isoParse } from 'd3-time-format';

export function emberSparklesParseData([ data ], { horizontalKey, verticalKey }) {
  return data.map(({ [horizontalKey]: x, [verticalKey]: y }) => {
    return { [horizontalKey]: isoParse(x), [verticalKey]: y };
  });
}

export default Ember.Helper.helper(emberSparklesParseData);
