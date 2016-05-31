import Ember from 'ember';
import layout from '../templates/components/ember-sparkles';

const { computed } = Ember;

const DEFAULT_WIDTH = 960;
const DEFAULT_HEIGHT = 500;

export default Ember.Component.extend({
  layout,
  tagName: 'svg',
  attributeBindings: ['width', 'height'],

  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
  margin: {
    top: 20,
    right: 25,
    bottom: 30,
    left: 25,
  },

  innerWidth: computed('width', 'margin', function() {
    return this.get('width') - this.get('margin.left') - this.get('margin.right');
  }),

  innerHeight: computed('height', 'margin', function() {
    return this.get('height') - this.get('margin.top') - this.get('margin.bottom');
  })
});
