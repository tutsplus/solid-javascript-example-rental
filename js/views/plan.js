var PlanView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "change", this.render);
    this.ranges_view = new RangesView({
      collection: this.model.get("ranges")
    });
  }

, render: function() {
    this.$el.find(".plan-rangelist").html(
      this.ranges_view.render().el
    );
    return this;
  }
});
