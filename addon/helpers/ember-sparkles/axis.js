import Ember from 'ember';
import axis from 'd3-axis';
import { timeFormat } from 'd3-time-format';

const { String: { capitalize } } = Ember;

export function emberSparklesAxis([ scale ], { position, tickFormat, ticks, width, height }) {
  let axisType = `axis${capitalize(position)}`;
  let axisFn = axis[axisType];

  let result = axisFn().scale(scale);

  if (tickFormat) {

    // Change to test with npm link to kiosk app:

    if(typeof tickFormat === 'string' || tickFormat instanceof String) {
      result.tickFormat(timeFormat(tickFormat));
    } else {
      result.tickFormat(tickFormat);
    }
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
