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

// test('The chart accepts data and generates arcs', function(assert) {
//   assert.expect(1);
//   this.set('data', [
//     {
//       key: 'arc 1',
//       value: 50
//     },{
//       key: 'arc 2',
//       value: 50
//     }, {
//       key: 'arc 3',
//       value: 50
//     }
//   ]);
//   this.render(hbs`
//   <svg>
//     {{ember-sparkles/pie-chart
//         data=data
//         with-transition=false
//         domain=(map-by 'value' data)
//       }}
//   </svg>
//   `);
//   let actualRadians = ["2.094395", "2.094395", "2.094395"]
//   let paths = this.$('path');
//   let theoreticalRadians = paths.map(function(object){
//     data = paths[object].__data__;
//     startAngle = data.startAngle;
//     endAngle = data.endAngle;
//     difference = (endAngle - startAngle).toFixed(6);
//     return difference;
//   });
//   console.log(theoreticalRadians);
//   assert.equal(theoreticalRadians, actualCoordinates, 'There are the correct number of arcs and the angles of each arc is correct');
// });

// test('data can be updated and removed', function(assert) {
//   assert.expect(1);
//   this.set('data', [
//     {
//       key: 'arc 1',
//       value: 50
//     },{
//       key: 'arc 2',
//       value: 50
//     }, {
//       key: 'arc 3',
//       value: 50
//     }
//   ]);
//
//   this.render(hbs`
//   <svg>
//     {{ember-sparkles/pie-chart
//         data=data
//         with-transition=false
//         domain=(map-by 'value' data)
//       }}
//   </svg>
//   `);
// });
