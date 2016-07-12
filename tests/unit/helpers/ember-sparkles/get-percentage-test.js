import { emberSparklesGetPercentage } from 'dummy/helpers/ember-sparkles/get-percentage';
import { module, test } from 'qunit';

module('Unit | Helper | ember sparkles/get percentage');

// Replace this with your real tests.
test('it works', function(assert) {
  let data = [
    {
      key: 'arc 1',
      value: 50
    },{
      key: 'arc 2',
      value: 50
    }, {
      key: 'arc 3',
      value: 50
    }
  ];
  let result = emberSparklesGetPercentage(data);
  stop();
  assert.ok(result);
});
