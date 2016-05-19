import { dataSparkler } from 'dummy/helpers/data-sparkler';
import { module, test } from 'qunit';

module('Unit | Helper | data sparkler');

test('it works', function(assert) {
  let result = dataSparkler([], { data: [] });
  assert.ok(result);
});
