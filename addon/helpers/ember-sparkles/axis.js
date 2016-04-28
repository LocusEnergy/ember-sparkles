import Ember from 'ember';
import axis from 'd3-axis';
import { timeFormat } from 'd3-time-format';

const { String: { capitalize } } = Ember;

export function emberSparklesAxis([ scale ], { position, tickFormat, ticks }) {
  let axisType = `axis${capitalize(position)}`;
  let axisFn = axis[axisType];

  let result = axisFn().scale(scale);

  if (tickFormat) {
    result.tickFormat(timeFormat(tickFormat));
  }

  if (ticks) {
    result.ticks(ticks);
  }

  return result;
}

export default Ember.Helper.helper(emberSparklesAxis);
