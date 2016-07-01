import Ember from 'ember';
import { arc } from 'd3-shape';

export function emberSparklesArc([ radius ], textLabel=false) {
  if (textLabel === true){
    return arc().outerRadius(radius - 40).innerRadius(radius - 40);
  }
  else {
    return arc().outerRadius(radius-10).innerRadius(0);
  }
}

export default Ember.Helper.helper(emberSparklesArc);
