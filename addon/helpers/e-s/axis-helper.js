import Ember from 'ember';
import axis from 'd3-axis';

const { String: { capitalize } } = Ember;

export function emberSparklesAxis([ scale ], { position, ticks=1, tickFormat=null, tickValues=null, width, height, xGrid=false, yGrid=false }) {
  let axisFn = axis[`axis${capitalize(position)}`];
  let result = axisFn().scale(scale);

  result.tickFormat(tickFormat);
  result.tickValues(tickValues);
  result.ticks(ticks);

  if (yGrid) {
    result.tickSizeInner((-1) * width);
  }

  if (xGrid) {
    result.tickSizeInner((-1) * height);
  }

  return result;
}

export default Ember.Helper.helper(emberSparklesAxis);
