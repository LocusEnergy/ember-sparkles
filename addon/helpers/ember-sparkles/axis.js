import Ember from 'ember';
import axis from 'd3-axis';
import { timeFormat } from 'd3-time-format';

const tickFilter = (tickFormat, skipIdx) => {
  let formatter = timeFormat(tickFormat);
  return (d, idx) => {
    if (idx % skipIdx === 0) {
      return formatter(d);
    }
  };
};

const { String: { capitalize } } = Ember;

export function emberSparklesAxis([ scale , { position, tickFormat, ticks, width, height, skipIdx=1, xGrid, yGrid } ]) {
  let axisType = `axis${capitalize(position)}`;
  let axisFn = axis[axisType];

  let result = axisFn().scale(scale);

  if (tickFormat) {
    result.tickFormat(tickFilter(tickFormat, skipIdx));
  }

  if (ticks) {
    result.ticks(ticks);
  }

  if (yGrid) {
    result.tickSizeInner((-1)*width);
  }

  if (xGrid) {
    result.tickSizeInner((-1)*height);
  }

  return result;
}

export default Ember.Helper.helper(emberSparklesAxis);
