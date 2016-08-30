import { pieData } from 'dummy/helpers/e-s/pie-data';
import { module, test } from 'qunit';
import _ from 'lodash';

module('Unit | Helper | pie data');

test('pie data helper', function(assert) {
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
  let result = pieData([ data ], { valueKey: 'value' });
  let percentages = result.map(({ percentage }) => percentage);
  assert.deepEqual(percentages, ['39.4', '30.3', '30.3'], 'The percentages displayed are expected');


  result = pieData([ data ], { valueKey: 'value', precision: 2 });
  let numLengths = result.map(({  percentage  }) => percentage.length);
  assert.deepEqual(numLengths, [5, 5, 5], 'The precision works the way it is suppsed to');

  result = pieData([ data ], { valueKey: 'value'});
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
  result = pieData([ data ], { valueKey: 'value', threshold: 10 });
  percentages = result.map(({ percentage }) => percentage);
  assert.deepEqual(percentages, ["39.2", "30.1", "30.1", undefined], 'The percentages are left out if they do not exist');
});
