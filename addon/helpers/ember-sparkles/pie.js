import Ember from 'ember';
import { pie } from 'd3-shape';

export function emberSparklesPie(params, { valueFn }) {
  return pie().sortValues((a, b) => a - b).value(valueFn);
}

export default Ember.Helper.helper(emberSparklesPie);
