import Ember from 'ember';

export function emberSparklesTranslateY() {
  return function(y) {
    return `translate(0,${y})`;
  };
}

export default Ember.Helper.helper(emberSparklesTranslateY);
