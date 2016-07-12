import Ember from 'ember';

export function emberSparklesGetPercentage([ data ]) {
  let totalArray = data.map(function(object){
    return object.value;
  });
  let total = totalArray.reduce(function(a, b){
    return a + b;
  });
  let percentages = data.map(function(object){
    return parseFloat(((object.value/total)*100).toFixed(1));
  });
  return percentages;
}

export default Ember.Helper.helper(emberSparklesGetPercentage);
