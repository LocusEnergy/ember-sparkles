import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import _ from 'lodash';
import LetHelperInitializer from 'ember-let/initializers/register-let-helper';
LetHelperInitializer.initialize();

moduleForComponent('ember-sparkles/pie-chart', 'Integration | Component | ember sparkles/pie chart', {
  integration: true
});

import Ember from 'ember';
import wait from 'ember-test-helpers/wait';

const {
  run: { later }
} = Ember;

test('it renders', function(assert) {
  this.set('data', []);
  this.render(hbs`
  <svg>
    {{ember-sparkles/pie-chart
        data=(pie-sparkler data dataKey='value' threshold=5 precision=1)
        domain=(map-by 'key' pieData)
        width=1
        height=1
      }}
  </svg>
  `);
  assert.ok(this.$('.ember-sparkles--pie-chart').length);
});


test('The chart accepts data and generates arcs properly', function(assert) {
  assert.expect(1);

  let data = [
    {
      name: 'arc 1',
      value: 50
    },{
      name: 'arc 2',
      value: 50
    }, {
      name: 'arc 3',
      value: 50
    }
  ];

  let domain = data.map(({ key }) => key);

  this.setProperties({ data, domain });

  this.render(hbs`
    <svg height="100" width="100">
      {{ember-sparkles/pie-chart
        height=50
        width=50
        radius=10
        outputKey=(r/get 'value')
        groupKey=(r/get 'data.name')
        colorScale=(cat-color-scale '20' domain)
        data=(pie-sparkler data dataKey='value')
        with-arc-labels=true
      }}
    </svg>
  `);
  assert.equal(this.$('path').length, 3, 'There are the correct number of arcs');
});

test('data can be updated and removed', function(assert) {
  assert.expect(2);
  let data = [
    {
      name: 'arc 1',
      value: 50
    },{
      name: 'arc 2',
      value: 50
    }, {
      name: 'arc 3',
      value: 50
    }
  ];

  let domain = data.map(({ key }) => key);

  this.setProperties({ data, domain });

  this.render(hbs`
    <svg height="100" width="100">
      {{ember-sparkles/pie-chart
        height=50
        width=50
        radius=10
        outputKey=(r/get 'value')
        groupKey=(r/get 'data.name')
        colorScale=(cat-color-scale '20' domain)
        data=(pie-sparkler data dataKey='value')
      }}
    </svg>
  `);
  assert.equal(this.$('path').length, 3, 'There are intially 3 arcs');

  data = [
    {
      name: 'arc 1',
      value: 50
    },{
      name: 'arc 2',
      value: 50
    }, {
      name: 'arc 3',
      value: 50
    }, {
      name: 'arc 4',
      value: 50
    }
  ];
  domain = data.map(({ key }) => key);

  this.setProperties({ data, domain });

  assert.equal(this.$('path').length, 4, 'There are the correct number of arcs after the data is updated');

});
test('The proper arcs have the proper data', function(assert) {
  assert.expect(3);
  let data = [
    {
      name: 'arc 1',
      value: 30
    },{
      name: 'arc 2',
      value: 60
    }, {
      name: 'arc 3',
      value: 40
    }
  ];

  let domain = data.map(({ key }) => key);
  let total = _.sum(data.map(({ value }) => value));
  let expectedPercentages = data.map(({ value }) => ((value/total) * 100).toFixed(1));

  this.setProperties({ data, domain });

  this.render(hbs`
    <svg height="100" width="100">
      {{ember-sparkles/pie-chart
        height=50
        width=50
        radius=10
        outputKey=(r/get 'value')
        groupKey=(r/get 'data.name')
        colorScale=(cat-color-scale '20' domain)
        data=(pie-sparkler data dataKey='value')
        transition=(ember-sparkles/transition duration=10)
      }}
    </svg>
  `);

  later(() => {}, 20);

  return wait().then(() => {
    assert.equal(this.$('.arc-1').text(), expectedPercentages[0], 'arc 1 has correct percentage');
    assert.equal(this.$('.arc-2').text(), expectedPercentages[1], 'arc 2 has correct percentage');
    assert.equal(this.$('.arc-3').text(), expectedPercentages[2], 'arc 3 has correct percentage');
  });
});
