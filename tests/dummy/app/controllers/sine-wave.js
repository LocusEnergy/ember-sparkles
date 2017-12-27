/* eslint-disable no-constant-condition */
// BEGIN-SNIPPET sine-wave-example
import Controller from '@ember/controller';
import _ from 'lodash';
import {alias} from '@ember/object/computed'
// import {computed as emComputed} from '@ember/object'

import {readOnly, computed} from 'ember-decorators/object';
import {task, timeout} from 'ember-concurrency';

const {PI, sin, cos, round} = Math;

const TAU = 2 * PI;
const RESOLUTION = 90;

const translate = (d) => {
  let X = d.map(({x}) => x);
  let Y = d.map(({y}) => y);
  Y.push(Y.shift());
  return _.zipWith(X, Y, (x, y) => ({x, y}));
}

export default Controller.extend({
  speed: 45,
  step: 0,
  max: TAU,
  resolution: RESOLUTION,


  @computed('max', 'resolution')
  seed(m, r) {
    let g = m / r;
    return _.range(m, 0, -1 * g).map(x => ({x, y: sin(x)}));
  },

  // data: alias('seed'),

  data: alias('seed'),

  @readOnly
    @computed('data')
  wave(data) {
    return [{data}];
  },

  @readOnly
    @computed('data', 'resolution', 'step')
  theta(d, r, s) {
    return d[s % r]['x'];
  },

  @readOnly
    @computed('theta')
  angle(theta) {
    return round(theta * 360 / TAU);
  },

  @readOnly
    @computed('theta')
  rotatorX(theta) {
    return cos(theta);
  },

  @readOnly
    @computed('theta')
  rotatorY(theta) {
    return -1 * sin(theta);
  },

  rotator: task(function* () {
    while (true) {
      this.set('data', translate(this.get('data')));
      this.incrementProperty('step');
      yield timeout(this.get('speed'));
    }
  }).drop(),

  actions: {
    stop() {
      this.get('rotator').cancelAll();
    },

    labels() {
      this.toggleProperty('labels');
    }
  }
});

// END-SNIPPET
