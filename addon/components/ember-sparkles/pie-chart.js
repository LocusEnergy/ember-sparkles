import Ember from 'ember';
import layout from '../../templates/components/ember-sparkles/pie-chart';

export default Ember.Component.extend({
  layout,
  tagName: '',
  'with-transition': true,
  'with-arc-labels': false,

  transformLegend(d, i) {
    return `translate(0,${i * 20})`;
  }
});
