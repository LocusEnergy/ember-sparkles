import Ember from 'ember';

export function debug([fn]) {
  return function(value) {
    return fn(value);
  }
}

export default Ember.Helper.helper(debug);
