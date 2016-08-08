import Ember from 'ember';
import layout from '../../templates/components/ember-sparkles/axis';
import axis from 'd3-axis';
import { timeFormat } from 'd3-time-format';

const { String: { capitalize } } = Ember;

const tickFilter = function(tickFormat, responsiveSkipIdx=1) {
  let formatter = timeFormat(tickFormat);
  return (d, idx) => {
    if (idx % responsiveSkipIdx === 0) {
      return formatter(d);
    }
  };
};

const setupAxis = function({ scale, position, tickFormat, ticks, width, height, responsiveSkipIdx, xGrid, yGrid }) {
  let axisType = `axis${capitalize(position)}`;
  let axisFn = axis[axisType];

  let result = axisFn().scale(scale);

  if (tickFormat) {
    result.tickFormat(tickFilter(tickFormat, responsiveSkipIdx));
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

const axisProperties = ['scale', 'position', 'tickFormat', 'ticks', 'width', 'height', 'responsiveSkipIdx', 'xGrid', 'yGrid'];

export default Ember.Component.extend({
  layout,
  tagName: '',

  didReceiveAttrs() {
    let props = this.getProperties(axisProperties);
    this.set('axis', setupAxis(props));
  }
});
