// BEGIN-SNIPPET data-join-example
import Ember from 'ember';
import _ from 'lodash/lodash';
import { task, timeout } from 'ember-concurrency';

const SIZE = 700;
const QUANTITY = 20;
const OVERLAP = 2;

const origin = SIZE / (QUANTITY * 2);
const row = _.range(origin, SIZE, SIZE / QUANTITY);
const grid = _.flatten(row.map(x => row.map(y => ({ x, y }))));

const generate = function() {
  let data = grid.map((g, idx) => {
    const radius = _.random(2, (SIZE * OVERLAP)/QUANTITY);
    return { radius, idx, ...g };
  });

  return _.sample(data, _.random(1, data.length));
};

const svgDimension = `${SIZE}px`;

export default Ember.Controller.extend({
  svgDimension: svgDimension,
  duration: 5500,
  grid: grid,

  // enterFill: '#ffe600'
  // updateFill:
  // exitFill:

  cycle: task(function * () {
    while(true) {
      this.set('data', generate());
      yield timeout(6000);
    }
  }).on('init'),

  actions: {
    toggleData() {
      this.set('data', generate());
    }
  }
});

// END-SNIPPET data-join-example
