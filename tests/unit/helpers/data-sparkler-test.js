import { dataSparkler } from 'dummy/helpers/data-sparkler';
import { module, test } from 'qunit';

module('Unit | Helper | data sparkler');

test('it works', function(assert) {
  assert.ok(dataSparkler instanceof Function);
});
