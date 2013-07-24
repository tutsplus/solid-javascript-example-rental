var RangeList = Backbone.Collection.extend({
  model: Range
, initialize: function() {
    this.on("change:end", this.stretchRentalPlan, this);
    this.on("wantsToRemove", this.wantsToRemove);
  }

, stretchRentalPlan: function(range) {
    this.add({ start: range.get("end") + 1});
  }

, safeRemove: function(range) {
    var end = range.get("end");
    var index = this.indexOf(range);

    if(this.length > 1) {
      this.remove(range);
      this.at(index - 1).set("end", end, { silent: true });
    }

  }
, wantsToRemove: function(range) {
    this.safeRemove(range);
  }
});
