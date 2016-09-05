import Ember from 'ember';
import _ from 'lodash/lodash';

// BEGIN-SNIPPET sine-wave-example
import { task, timeout } from 'ember-concurrency';
const { computed } = Ember;
const { PI, sin, abs } = Math;

const TAU = 2 * PI;
const DELTA = 150;

const translate = (d) => {
  let X = d.map(({ x }) => x);
  let Y = d.map(({ y }) => y);
  Y.unshift(Y.pop());
  return _.zipWith(X, Y, (x, y) => ({ x, y }));
}

export default Ember.Controller.extend({
  xMax: 2 * TAU,
  delta: DELTA,

  data: computed('xMax', 'delta', function() {
    let xMax = this.get('xMax');
    let delta = this.get('delta');
    return _.range(xMax, 0, -1 * xMax / delta).map(x => ({ x, y: sin(x) }));
  }),

  speed: 10,
  step: 0,
  theta: 0,

  qq: computed.alias('data.objectAt(step)'),

  zeros: computed.filter('data', function({ y }) {
    return abs(y) < 0.0001;
  }),

  wave: computed('data', function() {
    let data = this.get('data');
    return [ { data } ];
  }),

  cycle: task(function * () {
    while(true) {
      let step = this.get('step') % this.get('delta');
      this.set('data', translate(this.get('data')));
      this.set('theta', data[step]['x']);
      step++;
      this.set('step', step);
      yield timeout(this.get('speed'));
    }
  }).drop(),

  actions: {
    start() {
      this.get('cycle').perform();
    },

    stop() {
      this.get('cycle').cancelAll();
    }
  }
});

// END-SNIPPET
