import Ember from 'ember';
import layout from '../../templates/components/e-s/grouped-bar-chart';

export default Ember.Component.extend({
  layout,
  classNames: ['ember-sparkles--grouped-bar-chart'],
  tagName: '',
  height: 100,
  width: 100,
  'with-transition': true
});
