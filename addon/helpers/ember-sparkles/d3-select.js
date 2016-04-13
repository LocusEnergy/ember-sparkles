import Ember from 'ember';
import d3 from 'npm:d3';

export function emberSparklesD3Select([ element ]) {
  return d3.select(element);
}

export default Ember.Helper.helper(emberSparklesD3Select);
