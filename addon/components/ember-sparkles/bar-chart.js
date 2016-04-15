import Ember from 'ember';
import layout from '../../templates/components/ember-sparkles/bar-chart';

export default Ember.Component.extend({
  layout,
  classNames: ['ember-sparkles--bar-chart'],

  didInsertElement() {
    this._super(...arguments);
    Ember.run.scheduleOnce('afterRender', this, 'renderGraph');
  },

  renderGraph() {
    let [ el ] = this.$().toArray();
    this.set('d3el', d3.select(el));
  }
});
