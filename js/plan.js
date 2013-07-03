var Plan = Backbone.Model.extend({
  defaults: {
    ranges: new RangeList([ new Range ])
  }
});
