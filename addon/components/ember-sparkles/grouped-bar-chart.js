import Ember from 'ember';
import layout from '../../templates/components/ember-sparkles/grouped-bar-chart';

export default Ember.Component.extend({
  layout,
  tagName: '',

  'with-transition': true,
  'with-legend': true,

  // callback to position legend
  transformLegend(d, i) {
    return `translate(0,${i * 20})`;
  }

});
