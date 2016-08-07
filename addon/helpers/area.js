/* strongly inspired by https://github.com/ivanvanderbyl/maximum-plaid/blob/master/addon/helpers/area.js */

import Ember from 'ember';

export function area([ width=960, height=500 ], { top=0, right=0, bottom=0, left=0 }) {
  return {
    outerWidth: width,
    outerHeight: height,
    width: width - left - right,
    height: height - top - bottom,
    margin: { top, right, bottom, left }
  }
}

export default Ember.Helper.helper(area);
