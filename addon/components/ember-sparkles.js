import Ember from 'ember';
import layout from '../templates/components/ember-sparkles';

const { computed } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'svg',
  attributeBindings: ['width', 'height', 'viewBox'],

  width: 960,
  height: 500,
  margin: {
    top: 20,
    right: 10,
    bottom: 20,
    left: 10,
  },

  innerWidth: computed('width', 'margin', function() {
    return this.get('width') - this.get('margin.left') - this.get('margin.right');
  }),

  innerHeight: computed('height', 'margin', function() {
    return this.get('height') - this.get('margin.top') - this.get('margin.bottom');
  }),

  viewBox: Ember.computed(function() {
    let w = this.get('width');
    let h = this.get('height');
    return `0 0 ${w} ${h}`;
  })
});
