var RangeList = Backbone.Collection.extend({
  model: Range
, initialize: function() {
    this.on("change:end",this.stretchRentalPlan,this);
  }

, stretchRentalPlan: function(range) {
    this.add({ start: range.get("end") + 1});
  }

, safeRemove: function(index) {
    if (this.length > 1) {
      this.remove(index);
    }
  }

});
