var HourRange = Range.extend({
  initialize: function() {
    this.set("end", HourRange.MAX, { silent: true });
  }
}, {
  MAX: 24
});
