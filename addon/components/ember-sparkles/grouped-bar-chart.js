import Ember from 'ember';
import { select } from 'd3-selection';
import layout from '../../templates/components/ember-sparkles/grouped-bar-chart';

import { scaleBand, scaleCategory20b } from 'd3-scale';



export default Ember.Component.extend({
  layout,
  tagName: 'g',
  classNames: ['ember-sparkles--grouped-bar-chart'],

  'with-transition': true,

  didInsertElement() {
    this._super(...arguments);
    Ember.run.scheduleOnce('afterRender', this, 'renderChart');
  },

  renderChart() {
    let [ el ] = this.$().toArray();
    this.set('d3el', select(el));
  },

  didRender() {
    let data = this.get('data');
    let xScale = this.get('x-scale');
    let yScale = this.get('y-scale');
    let height = this.get('height')

    let domain = data[0]['Wh_sum'].map(({ name }) => name);
    let groupScale = scaleBand().domain(domain).range([ 0, xScale.bandwidth() ])
    let colorScale = scaleCategory20b().domain(domain)

    let [ el ] = this.$().toArray();

    let group = select(el).selectAll('.group').data(data);

    let rect = group.enter().append('g')
      .attr('class', 'group')
      .attr('transform', ({ ts }) => `translate(${xScale(ts)},0)`)
      .selectAll('rect').data(({ Wh_sum }) => Wh_sum)

    console.log(rect)

    rect.enter().append('rect')
      .attr('width', groupScale.bandwidth())
      .attr('x', ({ name }) => groupScale(name))
      .attr('y', ({ value }) => yScale(value))
      .attr('height', ({ value }) => height - yScale(value))
      .style('fill', ({ name }) => colorScale(name))

    rect.exit().remove()

    group.exit().remove()

  }
});
