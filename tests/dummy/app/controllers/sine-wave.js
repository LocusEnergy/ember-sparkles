/*eslint-disable no-constant-condition*/

import Ember from 'ember';
import _ from 'lodash/lodash';

// BEGIN-SNIPPET sine-wave-example
import { task, timeout } from 'ember-concurrency';
import computed from 'ember-computed-decorators';
const { computed: { alias } } = Ember;
const { PI, sin, cos, round } = Math;

const TAU = 2 * PI;
const RESOLUTION = 270;

const translate = (d) => {
  let X = d.map(({ x }) => x);
  let Y = d.map(({ y }) => y);
  Y.push(Y.shift());
  return _.zipWith(X, Y, (x, y) => ({ x, y }));
}

export default Ember.Controller.extend({
  xMax: TAU,
  resolution: RESOLUTION,
  direction: true,

  @computed('xMax', 'resolution')
  seed(m, r) {
    let g = m / r;
    return _.range(g, m + g, g).map(x => ({ x, y: sin(x) }));
  },

  data: alias('seed'),

  speed: 100,
  step: 0,

  @computed('data')
  wave(data) {
    return [ { data } ];
  },

  @computed('data', 'resolution', 'step')
  theta(data, r, step) {
    return data[step % r]['x'];
  },

  @computed('theta')
  angle(theta) {
    return round(theta * 360 / TAU);
  },

  @computed('theta')
  rotatorX(theta) {
    return cos(theta);
  },

  @computed('theta')
  rotatorY(theta) {
    return -1 * sin(theta);
  },

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
    },

    labels() {
      this.toggleProperty('labels');
    }
  }
});

// END-SNIPPET
