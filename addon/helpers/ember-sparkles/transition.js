import Ember from 'ember';
import { transition } from 'd3-transition';

export function transitionHelper(params, { duration }) {
  return transition().duration(duration);
}

export default Ember.Helper.helper(transitionHelper);
