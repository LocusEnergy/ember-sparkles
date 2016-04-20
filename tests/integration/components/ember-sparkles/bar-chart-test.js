import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-sparkles/bar-chart', 'Integration | Component | ember sparkles/bar chart', {
  integration: true
});

let getAttr = (collection, attribute) => collection.map((idx, item) => $(item).attr(attribute)).toArray();

test('it renders', function(assert) {
  this.set('data', []);
  this.render(hbs`<svg>{{ember-sparkles/bar-chart data=data}}</svg>`);
  assert.equal(this.$().text().trim(), '');
});

test('it accepts data and generates rectangles', function(assert) {
  let data = [ [ '2016-03-02T00:00:00', 9], ['2016-03-03T00:00:00', 42], ['2016-03-04T00:00:00', 65], ['2016-03-05T00:00:00', 17] ];
  this.set('data', data);

  this.set('xDomain', data.map(d => d[0]));
  this.set('xRange', [0, 100]);

  // set the y domain to a nice even amount so that the y values and heights are easy to infer
  this.set('yDomain', [0, 100]);
  this.set('yRange', [100, 0]);
  this.set('padding', 0);

  this.render(hbs`
    <svg height="100" width="100">
      {{ember-sparkles/bar-chart
        data=data

        xScale=(band-scale
          xDomain
          xRange
          padding=padding
          round=true
        )
        yScale=(linear-scale yDomain yRange)
        width=100
        height=100
      }}
    </svg>`
  );

  let rect = this.$('rect');
  assert.equal(rect.length, 4, 'there are 4 <rect> elements');
  assert.deepEqual(getAttr(rect, 'x'), ['0', '25', '50', '75'], 'each rectangle has an x coordinate, and they are evenly spaced');
  assert.deepEqual(getAttr(rect, 'y'), ['91', '58', '35', '83'], 'each rectangle has a properly calculated y-coordinate');
  assert.deepEqual(getAttr(rect, 'width'), ['25', '25', '25', '25'], 'each rect has a width attribute, all width values are equal');
  assert.deepEqual(getAttr(rect, 'height'), ['9', '42', '65', '17'], 'each rect has a properly calculated height attribute');
});


// test that data can be updated

// test multiple series of bar charts
