import Ember from 'ember';
import { select } from 'd3-selection';

export function emberSparklesD3Select(element) {
  return select(element);
}

export default Ember.Helper.helper(emberSparklesD3Select);
