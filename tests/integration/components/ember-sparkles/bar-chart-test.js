import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import BarChart from 'ember-sparkles/page-objects/bar-chart';

moduleForComponent('ember-sparkles/bar-chart', 'Integration | Component | ember sparkles/bar chart', {
  integration: true,
  beforeEach() {
    this.chart = new BarChart(this);
  }
});

const HEIGHT = 100;

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
  this.set('yDomain', [0, HEIGHT]);
  this.set('yRange', [100, 0]);
  this.set('height', HEIGHT);
  this.set('barPadding', 0);
  this.set('ticks', 5);

  this.render(hbs`
    <svg height="100" width="100">
      {{ember-sparkles/bar-chart
        data=data

        xScale=(band-scale
          xDomain
          xRange
          padding=barPadding
          round=true
        )
        yScale=(linear-scale yDomain yRange nice=true)
        ticks=ticks
        width=100
        height=100
      }}
    </svg>`
  );

  // check rectangle existence and attributes
  assert.equal(this.chart.rect().length, 4, 'there are 4 <rect> elements');
  assert.deepEqual(this.chart.getAttr('x'), ['0', '25', '50', '75'], 'each rectangle has an x coordinate, and they are evenly spaced');
  assert.deepEqual(this.chart.getAttr('y'), ['91', '58', '35', '83'], 'each rectangle has a properly calculated y-coordinate');
  assert.deepEqual(this.chart.getAttr('width'), ['25', '25', '25', '25'], 'each rectangle has a width attribute, all width values are equal');
  assert.deepEqual(this.chart.getAttr('height'), ['9', '42', '65', '17'], 'each rectangle has a properly calculated height attribute');

  // check axes existence and attributes
  assert.ok(this.$('.x.axis').length);
  assert.ok(this.$('.y.axis').length);
  assert.equal(this.$('.x.axis .tick').length, 4, 'there are 4 ticks on the x axis');
  assert.equal(this.$('.y.axis .tick').length, 6, 'there are 6 ticks on the y axis');
});

test('data can be updated and removed', function(assert) {
  let data = [ [ '2016-03-02T00:00:00', 9], ['2016-03-03T00:00:00', 42], ['2016-03-04T00:00:00', 65], ['2016-03-05T00:00:00', 17] ];
  this.set('data', data);

  this.set('xDomain', data.map(d => d[0]));
  this.set('xRange', [0, 100]);

  // set the y domain to a nice even amount so that the y values and heights are easy to infer
  this.set('yDomain', [0, 100]);
  this.set('yRange', [100, 0]);
  this.set('barPadding', 0);
  this.set('ticks', 5);

  this.render(hbs`
    <svg height="100" width="100">
      {{ember-sparkles/bar-chart
        data=data

        xScale=(band-scale
          xDomain
          xRange
          padding=barPadding
          round=true
        )
        yScale=(linear-scale yDomain yRange nice='nice')
        ticks=ticks
        width=100
        height=100
      }}
    </svg>`
  );

  assert.deepEqual(this.chart.getAttr('y'), ['91', '58', '35', '83'], 'the y-coordinates correspond to the first dataset');
  assert.deepEqual(this.chart.getAttr('height'), ['9', '42', '65', '17'], 'height attributes correspond to first dataset');
  assert.equal(this.$('.x.axis .tick').length, 4, 'there are 4 ticks on the x axis');
  // assert.equal(this.$('.y.axis .tick').last().text())

  data = [ [ '2014-09-12T00:00:00', 45], ['2014-09-13T00:00:00', 10], ['2014-09-14T00:00:00', 61], ['2014-09-15T00:00:00', 30], ['2014-09-16T00:00:00', 51] ];
  this.set('xDomain', data.map(d => d[0]));
  this.set('data', data);

  assert.deepEqual(this.chart.getAttr('y'), ['55', '90', '39', '70', '49'], 'the y-coordinates correspond to the second dataset');
  assert.deepEqual(this.chart.getAttr('height'), ['45', '10', '61', '30', '51'], 'height attributes correspond to second dataset');
  assert.equal(this.$('.x.axis .tick').length, 5, 'there are now 5 ticks on the x axis');
  // console.log(this.$('.y.axis .tick').last().text())

  // also want to check that axes labels have changed on update
  // go over spencer's PR
  // refine axis pattern
  // transitions


});


// test multiple series of bar charts
