import { scheduleOnce } from '@ember/runloop';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/ember-sparkles';

const { floor } = Math;

const DEFAULT_WIDTH = 960;
const DEFAULT_HEIGHT = 500;

export default Component.extend({
  layout,
  tagName: 'svg',
  attributeBindings: ['fullSize:width', 'fullSize:height'],

  fullSize: '100%',

  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,

  marginTop: 20,
  marginRight: 50,
  marginBottom: 30,
  marginLeft: 40,

  resizeService: service('resize'),
  didInsertElement() {
    this._super(...arguments);
    scheduleOnce('afterRender', this, 'resize');
    this.get('resizeService').on('debouncedDidResize', this, this.resize);
  },
  willDestroyElement(){
    this._super(...arguments);
    this.get('resizeService').off('debouncedDidResize', this, this.resize);
  },

  resize() {
    this.set('width', floor(this.$().innerWidth()));
    this.set('height', floor(this.$().innerHeight()));
  },

  innerWidth: computed('width', 'marginLeft', 'marginRight', function() {
    return this.get('width') - this.get('marginLeft') - this.get('marginRight');
  }),

  innerHeight: computed('height', 'marginTop', 'marginBottom', function() {
    return this.get('height') - this.get('marginTop') - this.get('marginBottom');
  })
});
