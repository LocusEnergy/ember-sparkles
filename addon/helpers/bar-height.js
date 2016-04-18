import Ember from 'ember';

export function barHeight([ height ]) {
  return function(d) {
    return height - d;
  }
}

export default Ember.Helper.helper(barHeight);
