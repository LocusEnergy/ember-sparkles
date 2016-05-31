/* jshint ignore:start */
import Ember from 'ember';
import { max } from 'd3-array';

let getOutputMax = function({ data, outputKey, valueKey }) {
  return Math.ceil(max(data, ({ [outputKey]: o }) => max(o, ({ [valueKey]: v }) => v)));
};

let getGroupDomain = function({ data, outputKey, groupKey, sortFn }) {
  let [ firstGroup ] = data;
  let values = firstGroup[outputKey].sort(sortFn);
  return values.map(({ [groupKey]: g }) => g);
};

export function dataSparkler([], hash) {
  let outputMax = getOutputMax(hash);
  let groupDomain = getGroupDomain(hash);
  return { outputMax, groupDomain, ...hash };
}

export default Ember.Helper.helper(dataSparkler);
