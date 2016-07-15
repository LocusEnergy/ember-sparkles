import { pieSparkler } from 'dummy/helpers/pie-sparkler';
import { module, test } from 'qunit';
import _ from 'lodash';

module('Unit | Helper | pie sparkler');

// Replace this with your real tests.
//Tests to Write
//1. Test that it displays data when given percentages all over the threshold//done
//2. Test that the precision works the way it's supposed to//done
//3. Test that the percetages add up to roughly 100//done
//4. Test that the there are missing percentages under a certain threshold
test('pie sparkler works as expected', function(assert) {
  let data = [
    {
      key: 'arc 1',
      value: 65
    },{
      key: 'arc 2',
      value: 50
    }, {
      key: 'arc 3',
      value: 50
    }
  ];
  let result = pieSparkler([ data ], { dataKey: 'value' });
  let percentages = result.map(({ percentage }) => percentage);
  assert.deepEqual(percentages, ['39.4', '30.3', '30.3'], 'The percentages displayed are expected');


  result = pieSparkler([ data ], { dataKey: 'value', precision: 2 });
  let numLengths = result.map(({  percentage  }) => percentage.length);
  assert.deepEqual(numLengths, [5, 5, 5], 'The precision works the way it is suppsed to');

  result = pieSparkler([ data ], { dataKey: 'value'});
  let total = _.sum(result.map(({ percentage }) => parseFloat(percentage)));
  assert.equal(Math.round(total), 100, 'The percentages roughly add up to 100');

  data = [
    {
      key: 'arc 1',
      value: 65
    },{
      key: 'arc 2',
      value: 50
    }, {
      key: 'arc 3',
      value: 50
    },
    {
      key: 'arc 4',
      value: 1
    }
  ];
  result = pieSparkler([ data ], { dataKey: 'value', threshold: 10 });
  percentages = result.map(({ percentage }) => percentage);
  assert.deepEqual(percentages, ["39.2", "30.1", "30.1", undefined], 'The percentages are left out if they do not exist');
  // assert.equal(result, [{
  //   key: 'arc 1',
  //   percentage: '39.4%',
  //   value: 65,
  // },{
  //   key: "arc 2",
  //   percentage: "30.3%",
  //   value: 50
  // },{
  // key: "arc 3",
  // percentage: "30.3%",
  // value: 50
  // }]);
});
