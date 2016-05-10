import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-sparkles/grouped-bar-chart', 'Integration | Component | ember sparkles/grouped bar chart', {
  integration: true
});

test('it renders', function(assert) {
  this.set('data', []);
  this.render(hbs`
    <svg>
      {{ember-sparkles/grouped-bar-chart
        data=data
        with-transition=false
        height=1
        width=1
      }}
    </svg>
  `);
  assert.ok(this.$('.ember-sparkles--grouped-bar-chart').length);
});

// give it 2 series
// should plot both

//  TODO: major / minor scale??, invoke -> null  --}}
  // if data is in right format, then default scales just get set up automatically --}}
//  add legend  --}}
//  legend test: should be able to turn off / on with a property --}}

//  TODO: setup domain for groupScale with map helper --}}
//  write tests for grouped bar chart  --}}
//  add line series example --}}

//  check that update keeps things in order  --}}
//  check that legend is also in order --}}
