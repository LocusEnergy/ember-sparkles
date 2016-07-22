import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import _ from 'lodash';

moduleForComponent('ember-sparkles/pie-chart', 'Integration | Component | ember sparkles/pie chart', {
  integration: true
});

test('it renders', function(assert) {
  this.set('data', []);
  this.render(hbs`
  <svg>
    {{ember-sparkles/pie-chart
        data=(pie-sparkler data dataKey='value' threshold=5 precision=1)
        with-transition=false
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

  let domain = data.map(({ key }) => key);

  this.setProperties({ data, domain });

  this.render(hbs`
    <svg height="100" width="100">
      {{ember-sparkles/pie-chart
        height=50
        width=50
        radius=10
        colorScale=(cat-color-scale '20' domain)
        domain=domain
        data=(pie-sparkler data dataKey='value' threshold=5 precision=1)
        with-transition=false
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

  let domain = data.map(({ key }) => key);

  this.setProperties({ data, domain });

  this.render(hbs`
  <svg height="100" width="100">
    {{ember-sparkles/pie-chart
      height=50
      width=50
      radius=10
      colorScale=(cat-color-scale '20' domain)
      domain=domain
      data=(pie-sparkler data dataKey='value' threshold=5 precision=1)
      with-transition=false
      with-arc-labels=true
      }}
  </svg>
  `);
  assert.equal(this.$('path').length, 3, 'There are intially 3 arcs');
  //Information updated
  data = [
    {
      key: 'arc 1',
      value: 50
    },{
      key: 'arc 2',
      value: 50
    }, {
      key: 'arc 3',
      value: 50
    }, {
      key: 'arc 4',
      value: 50
    }
  ];
  domain = data.map(({ key }) => key);

  this.setProperties({ data, domain });

  assert.equal(this.$('path').length, 4, 'There are the correct number of arcs after the data is updated');

});
test('The proper arcs have the proper data', function(assert) {
  assert.expect(6);
  let data = [
    {
      key: 'arc 1',
      value: 30
    },{
      key: 'arc 2',
      value: 60
    }, {
      key: 'arc 3',
      value: 40
    }
  ];

  let total = _.sum(data.map(({ ['value']: d }) => d));
  let expectedPercentages = data.map(({ value }) => ((value/total) * 100).toFixed(1));
  //

  let domain = data.map(({ key }) => key);

  this.setProperties({ data, domain });

  this.render(hbs`
  <svg height="100" width="100">
    {{ember-sparkles/pie-chart
      height=50
      width=50
      radius=10
      colorScale=(cat-color-scale '20' domain)
      domain=domain
      data=(pie-sparkler data dataKey='value' threshold=5 precision=1)
      with-transition=false
      with-arc-labels=true
      }}
  </svg>
  `);
  assert.ok(this.$('.arc-1'),'Arc 1 Arc');
  assert.equal(this.$("text[data=arc-1]").text(), expectedPercentages[0], 'Arc 1 Percentage Properties match');
  assert.ok(this.$('.arc-2'),'Arc 2 Arc');
  assert.equal(this.$("text[data=arc-2]").text(), expectedPercentages[1], 'Arc 2 Percentage Properties match');
  assert.ok(this.$('.arc-3'),'Arc 3 Arc');
  assert.equal(this.$("text[data=arc-3]").text(), expectedPercentages[2], 'Arc 3 Percentage Properties match');

});
