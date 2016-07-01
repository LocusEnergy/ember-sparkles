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
  let arrayOfArcs = pie(data);
  let arrayOfAngles = pie(data).map(object => {
    return (object.endAngle - object.startAngle).toFixed(6);
  });

  assert.ok(arrayOfArcs);
  assert.equal(arrayOfArcs.length, 3, 'The Number of Arcs Returned is Correct');
  assert.deepEqual(arrayOfAngles, ["2.094395", "2.094395", "2.094395"], 'The Arcs are the correct number of radians');
});
