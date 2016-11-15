import Ember from 'ember';
import axis from 'd3-axis';

const { String: { capitalize } } = Ember;

export function emberSparklesAxis([ scale ], { position, ticks, tickFormat, tickValues, tickSizeInner=6, tickSizeOuter=6, tickPadding=3, gridlines=false, gridLength }) {
  let axisFn = axis[`axis${capitalize(position)}`];
  let result = axisFn().scale(scale);  

  result.ticks(ticks);
  result.tickFormat(tickFormat);
  result.tickValues(tickValues);

  let innerSize = gridlines ? (-1) * gridLength : tickSizeInner;
  result.tickSizeInner(innerSize);
  result.tickSizeOuter(tickSizeOuter);
  result.tickPadding(tickPadding);

  return result;
}

export default Ember.Helper.helper(emberSparklesAxis);
