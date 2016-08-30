import Ember from 'ember';
import layout from '../../templates/components/e-s/pie-chart';

export default Ember.Component.extend({
  layout,
  tagName: '',
  height: 100,
  width: 100,
  'with-transition': true,
  'with-arc-labels': true
});
