import Ember from 'ember';
import { arc } from 'd3-shape';
import { interpolate } from 'd3-interpolate';

export function emberSparklesArcTween(params) {
  params.innerRadius = 0;
  var i = interpolate({startAngle: 0, endAngle: 0}, params);
  return function(t) {
    return arc(i(t));
  };
}

export default Ember.Helper.helper(emberSparklesArcTween);
