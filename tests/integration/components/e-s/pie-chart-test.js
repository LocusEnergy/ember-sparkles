import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-sparkles/pie-chart', 'Integration | Component | ember sparkles/pie chart', {
  integration: true
});

test('it renders', function(assert) {
  this.set('data', []);
  this.render(hbs`
  <svg>
    {{e-s/pie-chart
      data=data
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
      amount: 50
    }, {
      name: 'arc 2',
      amount: 50
    }, {
      name: 'arc 3',
      amount: 50
    }
  ];

  this.setProperties({ data });

  this.render(hbs`
    <svg height="100" width="100">
      {{e-s/pie-chart
        radius=10
        outputKey=(r/get 'amount')
        groupKey=(r/get 'data.name')
        colorScale=(cat-color-scale '20')
        data=(e-s/pie-data data valueKey='amount')
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
      amount: 50
    },{
      name: 'arc 2',
      amount: 50
    }, {
      name: 'arc 3',
      amount: 50
    }
  ];

  let domain = data.map(({ key }) => key);

  this.setProperties({ data, domain });

  this.render(hbs`
    <svg height="100" width="100">
      {{e-s/pie-chart
        radius=10
        outputKey=(r/get 'amount')
        groupKey=(r/get 'data.name')
        colorScale=(cat-color-scale '20' domain)
        data=(e-s/pie-data data valueKey='amount')
      }}
    </svg>
  `);
  assert.equal(this.$('path').length, 3, 'There are intially 3 arcs');

  data = [
    {
      name: 'arc 1',
      amount: 50
    },{
      name: 'arc 2',
      amount: 50
    }, {
      name: 'arc 3',
      amount: 50
    }, {
      name: 'arc 4',
      amount: 50
    }
  ];

  domain = data.map(({ key }) => key);
  this.setProperties({ data, domain });
  assert.equal(this.$('path').length, 4, 'There are the correct number of arcs after the data is updated');
});
