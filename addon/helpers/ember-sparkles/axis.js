import Ember from 'ember';
import axis from 'd3-axis';
import { timeFormat } from 'd3-time-format';
import { d3TickFormat } from 'ember-d3-helpers';

const { String: { capitalize } } = Ember;

export function emberSparklesAxis([ scale ], { position, tickPresentation: tickFormat, ticks, width, height }) {
  let axisType = `axis${capitalize(position)}`;
  let axisFn = axis[axisType];

  let result = axisFn().scale(scale);

  // switch(typeof tickFormat) {
  //   case 'string':
  //     result.tickFormat(timeFormat(tickFormat));
  //     break;
  //   case 'function':
  //     result.tickFormat(tickFormat(timeFormat));
  //     break;
  // }

  // ember-d3-helpers/d3-tick-format

  result.tickFormat(d3TickFormat(tickPresentation));

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
