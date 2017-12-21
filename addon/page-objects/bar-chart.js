import $ from 'jquery';

export default class BarChart {
  constructor(env) {
    this.env = env;
    this.$ = this.env.$;
  }

  rect() {
    return this.$('rect');
  }

  getAttr(attribute) {
    return this.rect().map((idx, item) => $(item).attr(attribute)).toArray();
  }

  ticks() {
    return this.$('.tick');
  }
}
