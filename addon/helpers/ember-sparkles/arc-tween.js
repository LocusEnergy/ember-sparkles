import Ember from 'ember';
import { arc } from 'd3-shape';
import { interpolate } from 'd3-interpolate';


function defaultTweenFn(a) {
  var i = interpolate(this.data , a);
  this.data = i(0);
  return function(t) {
    return arc(i(t));
  };
}

export function emberSparklesArcTween([ element ], { arcTweenFn=defaultTweenFn }) {
  return function(path) {
    return path.attrTween(element, arcTweenFn);
  };
}

export default Ember.Helper.helper(emberSparklesArcTween);
