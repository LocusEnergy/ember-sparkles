import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { scaleOrdinal } from 'd3-scale';
import LineChart from 'ember-sparkles/page-objects/line-chart';
import { extent } from 'd3-array';

const groupDomain = ['series 1', 'series 2', 'series 0'];
const colorRange = ['#ff0000', '#00ff00', '#0000ff'];
const colorScale = scaleOrdinal().domain(groupDomain).range(colorRange);
const data = [
  {
    series: 'series 0',
    data: [
      {
        x: 0,
        y: 10
      },
      {
        x: 10,
        y: 10
      },
      {
        x: 20,
        y: 10
      }
    ]
  },
  {
    series: 'series 1',
    data: [
      {
        x: 0,
        y: 20
      },
      {
        x: 10,
        y: 20
      },
      {
        x: 20,
        y: 20
      }
    ]
  },
  {
    series: 'series 2',
    data: [
      {
        x: 0,
        y: 30
      },
      {
        x: 10,
        y: 30
      },
      {
        x: 20,
        y: 30
      }
    ]
  }
];

const xDomain = (data) => {
  const domains = data.map(({ data }) => extent(data, ({ x }) => x));
  return domains[0];
};

moduleForComponent('ember-sparkles/line-chart', 'Integration | Component | ember sparkles/line chart', {
  integration: true,
  beforeEach() {
    this.chart = new LineChart(this);
  }
});

test('it renders', function(assert) {
  assert.expect(1);

  this.set('data', []);
  this.render(hbs`
    <svg>
      {{e-s/line-chart
        data=data
        with-transition=false
      }}
    </svg>
  `);
  assert.ok(this.$('.ember-sparkles--line-chart').length);
});

test('it accepts data and generates a line', function(assert) {
  assert.expect(9);

  this.setProperties({
    colorScale,
    data,
    xDomain: xDomain(data)
  });

  this.render(hbs`
    <svg height="100" width="100">
      {{e-s/line-chart
        data=data

        inputKey=(r/get 'x')
        outputKey=(r/get 'y')
        groupKey=(r/get 'series')

        xScale=(linear-scale
          xDomain
          (append 100 0)
        )
        yScale=(linear-scale
          (append 0 100)
          (append 100 0)
          nice=true
        )

        colorScale=colorScale
        with-transition=false
      }}
    </svg>
  `);

  assert.equal(this.chart.lines().length, 3, 'there are 3 <path> elements');

  const moveto = ['M100,90', 'M100,80', 'M100,70'];
  const lineto = ['L0,90', 'L0,80', 'L0,70'];
  const pathDefinitions = this.chart.getAttr('d');

  pathDefinitions.forEach((d, i) => {
    assert.ok(
      new RegExp(moveto[i]).test(pathDefinitions[i]),
      'should contain starting point'
    );
    assert.ok(
      new RegExp(lineto[i]).test(pathDefinitions[i]),
      'should contain ending point'
    );
  });

  data.push({
    series: 'series 3',
    datatype: 'y',
    data: [
      {
        x: 0,
        y: 40
      },
      {
        x: 10,
        y: 40
      },
      {
        x: 20,
        y: 40
      }
    ]
  });

  this.setProperties({
    data,
    xDomain: xDomain(data)
  });

  assert.equal(this.chart.lines().length, 4, 'one line is added');

  data.pop();
  data.pop();

  this.setProperties({
    data,
    xDomain: xDomain(data)
  });

  assert.equal(this.chart.lines().length, 2, 'two lines are removed');
});
