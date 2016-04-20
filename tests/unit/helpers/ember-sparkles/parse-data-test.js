import { emberSparklesParseData } from 'dummy/helpers/ember-sparkles/parse-data';
import { module, test } from 'qunit';

module('Unit | Helper | ember sparkles/parse data');

// Replace this with your real tests.
test('it works', function(assert) {
  let data = [['2010', 42], ['2011', 39]];
  let result = emberSparklesParseData([ data ]);
  assert.ok(result);
});
