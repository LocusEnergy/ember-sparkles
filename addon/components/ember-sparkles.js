import Ember from 'ember';
import layout from '../templates/components/ember-sparkles';

export default Ember.Component.extend({
  layout,
  tagName: 'svg',
  attributeBindings: ['area.outerWidth:width', 'area.outerHeight:height']
});
