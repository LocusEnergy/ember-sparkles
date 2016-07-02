import { emberSparklesPie } from 'dummy/helpers/ember-sparkles/pie';
import { module, test } from 'qunit';

module('Unit | Helper | ember sparkles/pie');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.expect(3);
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

  let valueFn = ({ value }) => value;

  let pie = emberSparklesPie([], { valueFn });
  let pieData = pie(data);
  let arcs = pieData.map(({ startAngle, endAngle }) => (endAngle - startAngle).toFixed(6));

  assert.ok(pieData);
  assert.equal(pieData.length, 3, 'The Number of Arcs Returned is Correct');
  assert.deepEqual(arcs, ["2.094395", "2.094395", "2.094395"], 'The Arcs are the correct number of radians');
});
