import Ember from 'ember';

export function logDebug([ value ]/*, hash*/) {
  return function(value) {
    console.log('value: ', value)
    return value
  }
}

export default Ember.Helper.helper(logDebug);
