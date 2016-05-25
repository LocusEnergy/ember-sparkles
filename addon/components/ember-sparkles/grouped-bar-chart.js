import Ember from 'ember';
import { select } from 'd3-selection';
import layout from '../../templates/components/ember-sparkles/grouped-bar-chart';

const { computed } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'g',
  classNames: ['ember-sparkles--grouped-bar-chart'],

  'with-transition': true,
  'with-legend': true,

  didInsertElement() {
    this._super(...arguments);
    Ember.run.scheduleOnce('afterRender', this, 'renderChart');
  },

  renderChart() {
    let [ el ] = this.$().toArray();
    this.set('d3el', select(el));
  },

  // callback to position legend
  transformLegend(d, i) {
    return `translate(0,${i * 20})`;
  }

});
