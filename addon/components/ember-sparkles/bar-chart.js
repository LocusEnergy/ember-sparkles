import Ember from 'ember';
import { select } from 'd3-selection';
import layout from '../../templates/components/ember-sparkles/bar-chart';

export default Ember.Component.extend({
  layout,
  tagName: 'g',
  classNames: ['ember-sparkles--bar-chart'],

  'with-transition': true,

  didInsertElement() {
    this._super(...arguments);
    Ember.run.scheduleOnce('afterRender', this, 'renderChart');
  },

  renderChart() {
    let [ el ] = this.$().toArray();
    this.set('d3el', select(el));
  }
});
