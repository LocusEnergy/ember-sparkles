import Ember from 'ember';
import layout from '../templates/components/ember-sparkles';

const { computed } = Ember;
const { floor } = Math;

const DEFAULT_WIDTH = 960;
const DEFAULT_HEIGHT = 500;


// TODO: use explicit margin properties instead of hash

export default Ember.Component.extend({
  layout,
  tagName: 'svg',
  attributeBindings: ['fullSize:width', 'fullSize:height'],

  fullSize: '100%',

  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,

  margin: {
    top: 20,
    right: 25,
    bottom: 30,
    left: 25,
  },

  resizeService: Ember.inject.service('resize'),
  didInsertElement() {
    this._super(...arguments);
    Ember.run.scheduleOnce('afterRender', this, 'resize');
    this.get('resizeService').on('debouncedDidResize', (e) => this.resize());
  },

  resize() {
    this.set('width', floor(this.$().innerWidth()))
    this.set('height', floor(this.$().innerHeight()))
  },

  innerWidth: computed('width', 'margin', function() {
    return this.get('width') - this.get('margin.left') - this.get('margin.right');
  }),

  innerHeight: computed('height', 'margin', function() {
    return this.get('height') - this.get('margin.top') - this.get('margin.bottom');
  })
});
