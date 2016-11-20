export default class LineChart {
  constructor(env) {
    this.env = env;
    this.$ = this.env.$;
  }

  lines() {
    return this.$('.line');
  }

  getAttr(attribute) {
    return this.lines().map((idx, item) => this.$(item).attr(attribute)).toArray();
  }
}
