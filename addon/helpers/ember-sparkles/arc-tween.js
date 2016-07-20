import Ember from 'ember';
import { arc } from 'd3-shape';
import { interpolate } from 'd3-interpolate';

export function emberSparklesArcTween([ newAngle ]) {
  return function(d) {
    var interpolate = interpolate(d.endAngle , newAngle );
    return function(t) {
      d.endAngle = interpolate(t)
      return arc(d);
    };
  }
}

export default Ember.Helper.helper(emberSparklesArcTween);
