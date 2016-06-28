import Ember from 'ember';
import { pie } from 'd3-shape';

export function emberSparklesPie([ data ], { valueFn }) {
  return pie().sortValues(function(a, b) { return a - b; }).value(valueFn);
}

export default Ember.Helper.helper(emberSparklesPie);
