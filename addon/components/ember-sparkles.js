import Ember from 'ember';
import layout from '../templates/components/ember-sparkles';

export default Ember.Component.extend({
  layout,
  tagName: 'svg',

  attributeBindings: ['width', 'height', 'viewbox'],

  viewbox: Ember.computed(function() {
    let w = this.get('width');
    let h = this.get('height');
    return `0 0 ${w} ${h}`;
  })
});
