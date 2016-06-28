import Ember from 'ember';
import { arc } from 'd3-shape';

export function emberSparklesArc([ radius ]) {
  return arc().outerRadius(radius-10).innerRadius(0);
}

export default Ember.Helper.helper(emberSparklesArc);
