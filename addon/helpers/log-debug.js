import Ember from 'ember';

export function logDebug([ value ]/*, hash*/) {
  return function(value) {
    debugger
    console.log('value: ', value)
    return value
  }
}

export default Ember.Helper.helper(logDebug);
