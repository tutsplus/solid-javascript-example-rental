var Range = Backbone.Model.extend({
  defaults: {
    start: 1
  , end: 9999
  }

, initialize: function() {
    this.set("hour_ranges", new RangeList([ new HourRange ]));
  }

});
