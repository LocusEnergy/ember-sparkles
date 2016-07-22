import Ember from 'ember';
import { transition } from 'd3-transition';

export function emberSparklesTransition(params, { duration }) {
  return transition().duration(duration);
}

export default Ember.Helper.helper(emberSparklesTransition);
