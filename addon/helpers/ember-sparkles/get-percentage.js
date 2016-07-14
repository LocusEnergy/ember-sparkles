import Ember from 'ember';

export function emberSparklesGetPercentage([ data ]) {
  let totalArray = data.map(function(object){
    return object.value;
  });

  let total = totalArray.reduce(function(a, b){
    return a + b;
  });

  let array = data.map(function(object){
    return {
      key: object.key,
      percentage: parseFloat(((object.value/total)*100).toFixed(1))
    };
  });
  return array;
}

export default Ember.Helper.helper(emberSparklesGetPercentage);
