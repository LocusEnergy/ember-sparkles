import Ember from 'ember';
import { select } from 'd3-selection';
import { max } from 'd3-array';
import layout from '../../templates/components/ember-sparkles/grouped-bar-chart';

const { computed } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'g',
  classNames: ['ember-sparkles--grouped-bar-chart'],

  'with-transition': true,

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
  },

  // these properties are dependent on the data being in standard format
  yMax: computed('data', function() {
    let data = this.get('data');
    let outputKey = this.get('output-key');
    let valueKey = this.get('value-key'); 
    return max(data, ({ [outputKey]: o }) => max(o, ({ [valueKey]: v }) => v));
  }),
  
  groupDomain: computed('data', function() {
    let [ firstGroup ] = this.get('data');
    let outputKey = this.get('output-key');
    let groupKey = this.get('group-key');   
    let sortByGroup = function(a, b) {
      let aGroup = a[groupKey];
      let bGroup = b[groupKey];
      return aGroup > bGroup;
    } 
    let values = firstGroup[outputKey].sort(sortByGroup);
    return values.map(({ [groupKey]: g }) => g);
  })

});
