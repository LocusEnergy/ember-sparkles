import Ember from 'ember';
import { arc } from 'd3-shape';

export function emberSparklesArc([ innerRadius, outerRadius ]) {
    return arc().outerRadius(outerRadius).innerRadius(innerRadius);
}
export default Ember.Helper.helper(emberSparklesArc);
