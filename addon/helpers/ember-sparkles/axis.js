import Ember from 'ember';
import axis from 'd3-axis';
import { timeFormat } from 'd3-time-format';

const { String: { capitalize } } = Ember;

export function emberSparklesAxis([ scale ], { position, tickFormat, ticks, width, height, filter }) {
  let axisType = `axis${capitalize(position)}`;
  let axisFn = axis[axisType];

  let result = axisFn().scale(scale);

  if (filter) {
    result.tickValues(scale.domain().filter(filter));
  }

  if (tickFormat) {
    result.tickFormat(timeFormat(tickFormat));
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
