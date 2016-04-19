import Ember from 'ember';

export function logReturn([ value ]) {
  return function(value) {
    console.log('value: ', value)
    return value
  }
}

export default Ember.Helper.helper(logReturn);
