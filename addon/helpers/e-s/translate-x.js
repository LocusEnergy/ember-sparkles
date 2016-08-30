import Ember from 'ember';

export function emberSparklesTranslateX() {
  return function(x) {
    return `translate(${x},0)`;
  };
}

export default Ember.Helper.helper(emberSparklesTranslateX);
