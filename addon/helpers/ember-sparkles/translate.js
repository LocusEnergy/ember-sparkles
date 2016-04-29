import Ember from 'ember';

export function emberSparklesTranslate([ ]) {
  return function(horizontal) {
    return `translate(${horizontal},0)`
  };
}

export default Ember.Helper.helper(emberSparklesTranslate);
