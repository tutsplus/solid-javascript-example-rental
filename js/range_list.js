var RangeList = Backbone.Collection.extend({
  model: Range
, initialize: function() {
    this.on("change:end",this.stretchRentalPlan,this);
  }

, stretchRentalPlan: function(range) {
    this.add({ start: range.get("end") + 1});
  }

});
