var PlanView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "change", this.render);
    this.ranges_view = new RangesView({
      collection: this.model.get("ranges")
    , el: this.$el.find(".plan-day-ranges")
    });
  }

, render: function() {
    this.ranges_view.render();
  }
});
