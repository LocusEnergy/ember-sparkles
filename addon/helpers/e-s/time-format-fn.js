import Ember from 'ember';
import { timeFormat } from 'd3-time-format';

export function eSTimeFormatFn([ format ]) {
  return timeFormat(format);
}

export default Ember.Helper.helper(eSTimeFormatFn);
