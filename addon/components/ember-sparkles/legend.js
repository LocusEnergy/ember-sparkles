import Ember from 'ember';
import layout from '../../templates/components/ember-sparkles/legend';

const vector = function(dir, displacement) {
  return {
    vertical(x, y) {
      return `translate(${ x },${ displacement + y })`;
    },
    horizontal(x, y) {
      return `translate(${ displacement + x },${ y })`;
    }
  }[dir];
}

export default Ember.Component.extend({
  layout,
  tagName: '',
  'with-transition': true,

  shapePositioner(dir, spacing, { x=0, y=0 }) {
    return function(d, idx) {
      return vector(dir, idx * spacing)(x, y);
    }
  }
});
