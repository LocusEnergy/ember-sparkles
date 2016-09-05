import Ember from 'ember';

const { computed } = Ember;
const { cos, sin } = Math;

// BEGIN-SNIPPET rotating-circle
export default Ember.Component.extend({
  tagName: 'g',

  cx: computed('theta', 'radius', function() {
    let t = this.get('theta');
    let r = this.get('radius');
    return r * cos(t);
  }),

  cy: computed('theta', 'radius', function() {
    let t = this.get('theta');
    let r = this.get('radius');
    return r * sin(t);
  })
});
// END-SNIPPET
