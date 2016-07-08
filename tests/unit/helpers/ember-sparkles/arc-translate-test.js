import { emberSparklesArcTranslate } from 'dummy/helpers/ember-sparkles/arc-translate';
import { module, test } from 'qunit';
import { arc  } from 'd3-shape'

module('Unit | Helper | ember sparkles/arc translate');
let testArc = arc().innerRadius(10).outerRadius(10);
// Replace this with your real tests.
test('it works', function(assert) {
  assert.ok(testArc)
});
