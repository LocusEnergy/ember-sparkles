import Ember from 'ember';
import { pie } from 'd3-shape';

export function emberSparklesPie([ data ], { valueFn }) {
  return pie().sort(null).value(valueFn);
    // .value(function(data) { return data.population });
  // return pie;
}

export default Ember.Helper.helper(emberSparklesPie);
