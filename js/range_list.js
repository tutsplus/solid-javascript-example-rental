var RangeList = Backbone.Collection.extend({
  model: Range
, initialize: function() {
    this.on("change:end",this.stretchRentalPlan,this);
  }

, stretchRentalPlan: function(range) {
    this.add({ start: range.get("end") + 1});
  }

, safeRemove: function(index) {
    var range_to_remove = this.at(index)
      , end = range_to_remove.get("end");

    if (this.length > 1) {
      this.remove(index);
      this.at(index - 1).set("end", end, { silent: true });
    }
  }

});
