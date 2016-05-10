import Ember from 'ember';
import { max } from 'd3-array';

let getYMax = function({ data, outputKey, valueKey }) {
  return max(data, ({ [outputKey]: o }) => max(o, ({ [valueKey]: v }) => v));
};

let makeAccessor = function(key) {
  return (d) => Ember.get(d, key);
};

let getGroupDomain = function({ data, outputKey, groupKey }) {
    let [ firstGroup ] = data;
    let sortByGroup = function(a, b) {
      let aGroup = a[groupKey];
      let bGroup = b[groupKey];
      return aGroup > bGroup;
    } 
    let values = firstGroup[outputKey].sort(sortByGroup);
    return values.map(({ [groupKey]: g }) => g);
};

export function dataSparkler([], hash) {
  let yMax = getYMax(hash);
  let groupDomain = getGroupDomain(hash);
  return { yMax, groupDomain, ...hash };
}

export default Ember.Helper.helper(dataSparkler);
