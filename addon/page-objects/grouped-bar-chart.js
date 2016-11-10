export default class GroupedBarChart {
  constructor(env) {
    this.env = env;
    this.$ = this.env.$;
  }

  groups() {
    return this.$('.rect-group');
  }

  rect(method, property) {
    let rects = this.groups().map((idx, g) => this.$(g).children()).toArray();
    if (!arguments.length) {
      return rects;
    } else {
      return rects.map(g => g.map((idx, r) => this.$(r)[method](property)).toArray());
    }
  }

}
