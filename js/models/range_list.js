var RangeList = Backbone.Collection.extend({
  model: Range
, initialize: function() {
    this.on("change:end",this.stretchRentalPlan,this);
  }

, stretchRentalPlan: function(range) {
    this.add({ start: range.get("end") + 1});
  }

, safeRemove: function(range) {
    var index = this.indexOf(range)
      , end   = range.get("end");

    if (this.length > 1) {
      this.remove(range);
      this.at(index - 1).set("end", end, { silent: true });
    }
  }

});
