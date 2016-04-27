import Ember from 'ember';
import layout from '../templates/components/ember-sparkles';

const { computed } = Ember;

const DEFAULT_WIDTH = 960;
const DEFAULT_HEIGHT = 500;

export default Ember.Component.extend({
  layout,
  tagName: 'svg',
  attributeBindings: ['defaultWidth:width', 'defaultHeight:height', 'viewBox'],

  defaultWidth: DEFAULT_WIDTH,
  defaultHeight: DEFAULT_HEIGHT,
  margin: {
    top: 20,
    right: 25,
    bottom: 20,
    left: 25,
  },

  width: computed('defaultWidth', 'margin', function() {
    return this.get('defaultWidth') - this.get('margin.left') - this.get('margin.right');
  }),

  height: computed('defaultHeight', 'margin', function() {
    return this.get('defaultHeight') - this.get('margin.top') - this.get('margin.bottom');
  }),

  viewBox: Ember.computed(function() {
    let w = this.get('defaultWidth');
    let h = this.get('defaultHeight');
    return `0 0 ${w} ${h}`;
  })
}).reopenClass({
  positionalParams: ['defaultWidth', 'defaultHeight', 'margin']
});
