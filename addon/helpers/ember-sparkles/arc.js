import Ember from 'ember';
import arc from 'd3-shape';

export function emberSparklesArc({ radius }) {
  let result = d3.arc()
    .outerRadius(radius-10)
    .innerRadius(0);
  return result;
}

export default Ember.Helper.helper(emberSparklesArc);
