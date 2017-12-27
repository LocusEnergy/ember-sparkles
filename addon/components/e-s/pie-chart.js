import Component from '@ember/component';
import layout from '../../templates/components/e-s/pie-chart';

export default Component.extend({
  layout,
  tagName: '',
  height: 100,
  width: 100,
  'with-transition': true,
  'with-arc-labels': true
});
