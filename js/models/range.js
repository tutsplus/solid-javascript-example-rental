var Range = Backbone.Model.extend({
  defaults: {
    start: 1
  }

, initialize: function() {
    this.set("hour_ranges", new HourRangeList([ new HourRange ]));
    this.set("end", Range.MAX, { silent: true });
  }

},
{
  MAX: 9999
});
