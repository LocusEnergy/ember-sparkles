/*eslint-disable no-constant-condition*/

import Ember from 'ember';
import _ from 'lodash/lodash';

// BEGIN-SNIPPET data-join-example
import { task, timeout } from 'ember-concurrency';

const SIZE = 650;
const GRID_SIZE = 2;
const OVERLAP = 0.7;
const FREQUENCY = 4000;
const DURATION = 3200;

const generate = function(gridSize=GRID_SIZE, overlap=OVERLAP) {
  const origin = SIZE / (gridSize * 2);
  const row = _.range(origin, SIZE, SIZE / gridSize);
  const grid = _.flatten(row.map(x => row.map(y => ({ x, y }))));
  let data = grid.map((g, idx) => {
    const radius = _.random(2, (SIZE * overlap)/gridSize);
    return { radius, idx, ...g };
  });
  return _.sample(data, _.random(1, data.length));
};

export default Ember.Controller.extend({
  svgDimension: `${SIZE}px`,

  enterFill: '#ffe600',
  staticFill: '#f05a28',
  updateFill: '#b9006e',
  exitFill: '#3a0256',

  duration: DURATION,
  frequency: FREQUENCY,

  cycle: task(function * (g, o) {
    while(true) {
      this.set('data', generate(g, o));
      yield timeout(this.get('frequency'));
    }
  }).on('init').restartable(),

  toggleCycle({ f, d, g, o }) {
    this.set('frequency', f);
    this.set('duration', d);
    this.get('cycle').perform(g, o);
  },

  actions: {
    reset() {
      this.toggleCycle({ f: FREQUENCY, d: DURATION });
    },

    toggle() {
      this.toggleCycle({ f: 400, d: 300, g: 61, o: 0.4 });
    },

    makeThingsInteresting() {
      this.toggleCycle({ f: 110, d: 95, g: 11, o: 2 });
    }
  }
});

// END-SNIPPET
