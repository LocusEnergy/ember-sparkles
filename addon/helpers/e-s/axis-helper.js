import Ember from 'ember';
import axis from 'd3-axis';

const { String: { capitalize } } = Ember;

export function emberSparklesAxis([ scale ], { position, ticks, tickFormat, tickValues, gridlines=false, gridLength }) {
  let axisFn = axis[`axis${capitalize(position)}`];
  let result = axisFn().scale(scale);  

  result.ticks(ticks);
  result.tickFormat(tickFormat);
  result.tickValues(tickValues);

  if (gridlines) {
    result.tickSizeInner((-1) * gridLength);
  }

  return result;
}

export default Ember.Helper.helper(emberSparklesAxis);
