import { emberSparklesPie } from 'dummy/helpers/ember-sparkles/pie';
import { module, test } from 'qunit';

module('Unit | Helper | ember sparkles/pie');

test('it works', function(assert) {
  assert.expect(2);
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
  assert.deepEqual(arcs, ["2.094395", "2.094395", "2.094395"], 'The number of Arcs is correct and they are returning the correct number of radians');

});
