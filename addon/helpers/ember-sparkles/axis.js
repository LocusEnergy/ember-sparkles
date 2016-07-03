import Ember from 'ember';
import axis from 'd3-axis';
import { timeFormat } from 'd3-time-format';

const tickFilter = (tickFormat, responsiveSkipIdx) => {
  return function(d, idx) {
    if (idx % responsiveSkipIdx === 0) {
      return timeFormat(tickFormat)(d);
    }
  };
};

const { String: { capitalize } } = Ember;

export function emberSparklesAxis([ scale ], { position, tickFormat, ticks, width, height, responsiveSkipIdx=1 }) {
  let axisType = `axis${capitalize(position)}`;
  let axisFn = axis[axisType];

  let result = axisFn().scale(scale);

  if (tickFormat) {
    result.tickFormat(tickFilter(tickFormat, responsiveSkipIdx));
  }

  if (ticks) {
    result.ticks(ticks);
  }

  if (width) {
    result.tickSizeInner((-1)*width);
  }

  if (height) {
    result.tickSizeInner((-1)*height);
  }

  return result;
}

export default Ember.Helper.helper(emberSparklesAxis);
