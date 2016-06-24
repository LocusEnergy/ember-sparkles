import Ember from 'ember';
import pie from 'd3-shape';

export function emberSparklesPie(data) {
  let pie = d3.pie()
    .sort(null)
    .value(function(data) { return data.population });
  return pie;
}

export default Ember.Helper.helper(emberSparklesPie);
