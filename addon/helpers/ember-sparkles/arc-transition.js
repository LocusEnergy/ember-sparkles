import Ember from 'ember';
import { attrTween } from 'd3-transition';
import { interpolate } from 'd3-interpolate'
import { arc } from 'd3-shape';

export function emberSparklesArcTransition(a) {
  var i = interpolate(this._current, a);
   this._current = i(0);
   return function(t) {
     return arc(i(t));
   };
}

export default Ember.Helper.helper(emberSparklesArcTransition);
