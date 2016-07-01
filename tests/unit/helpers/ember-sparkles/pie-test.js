import { emberSparklesPie } from 'dummy/helpers/ember-sparkles/pie';
import { module, test } from 'qunit';

module('Unit | Helper | ember sparkles/pie');

// Replace this with your real tests.
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
  let array = pie(data);
  let arrayOfAngles = pie(data);
  console.log(arrayOfAngles[0].startAngle);
  assert.ok(array);
  assert.equal(arrayOfAngles.length, 3, 'The Number of Arcs Returned is Correct');
});
