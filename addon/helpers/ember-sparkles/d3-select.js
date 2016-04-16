import Ember from 'ember';

export function emberSparklesD3Select(element) {
  return d3.select(element);
}

export default Ember.Helper.helper(emberSparklesD3Select);
