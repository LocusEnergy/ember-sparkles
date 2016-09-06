import Ember from 'ember';
import _ from 'lodash/lodash';

// BEGIN-SNIPPET sine-wave-example
import { task, timeout } from 'ember-concurrency';
const { computed } = Ember;
const { PI, sin, abs, cos, round } = Math;

const TAU = 2 * PI;
const DELTA = 20;

const translate = (d) => {
  let X = d.map(({ x }) => x);
  let Y = d.map(({ y }) => y);
  Y.unshift(Y.pop());
  return _.zipWith(X, Y, (x, y) => ({ x, y }));
}

export default Ember.Controller.extend({
  xMax: TAU,
  delta: DELTA,

  data: computed('xMax', 'delta', function() {
    let xMax = this.get('xMax');
    let delta = this.get('delta');
    return _.range(xMax, 0, -1 * xMax / delta).map(x => ({ x, y: sin(x) }));
  }),

  speed: 50,
  step: 0,

  wave: computed('data', function() {
    let data = this.get('data');
    return [ { data } ];
  }),

  theta: computed('data', 'delta', 'step', function() {
    let data = this.get('data');
    let delta = this.get('delta');
    let step = this.get('step');
    return data[step % delta]['x'];
  }),

  angle: computed('theta', function() {
    return round(360 * (1 - this.get('theta') / TAU));
  }),

  rotatorX: computed('theta', function() {
    return cos(this.get('theta'));
  }),

  rotatorY: computed('theta', function() {
    return sin(this.get('theta'));
  }),

  zeros: computed.filter('data', function({ y }) {
    return abs(y) < 0.0001;
  }),

  cycle: task(function * () {
    while(true) {
      this.set('data', translate(this.get('data')));
      this.incrementProperty('step');
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
