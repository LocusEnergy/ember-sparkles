import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-sparkles/pie-chart', 'Integration | Component | ember sparkles/pie chart', {
  integration: true
});

test('it renders', function(assert) {
  this.set('data', []);
  this.render(hbs`
  <svg>
    {{ember-sparkles/pie-chart
        data=data
        with-transition=false
        domain=(map-by 'value' data)
      }}
  </svg>
  `);
  assert.ok(this.$('.ember-sparkles--pie-chart').length);
});


test('The chart accepts data and generates arcs properly', function(assert) {
  assert.expect(1);
  this.set('data', [
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
  ]);
  this.render(hbs`
  <svg>
    {{ember-sparkles/pie-chart
        data=data
        with-transition=false
        domain=(map-by 'value' data)
      }}
  </svg>
  `);
  assert.equal(this.$('path').length, 3, 'There are the correct number of arcs');
});

test('data can be updated and removed', function(assert) {
  assert.expect(2);
  this.set('data', [
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
  ]);

  this.render(hbs`
  <svg>
    {{ember-sparkles/pie-chart
        data=data
        with-transition=false
        domain=(map-by 'value' data)
      }}
  </svg>
  `);
  assert.equal(this.$('path').length, 3, 'There are intially 3 arcs');
  //Information updated
  this.set('data', [
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
  ]);
  assert.equal(this.$('path').length, 4, 'There are the correct number of arcs after the data is updated');


});
