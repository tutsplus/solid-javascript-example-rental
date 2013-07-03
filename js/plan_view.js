var PlanView = Backbone.View.extend({
  template: $("#plan-template").html()

, render: function() {
    var template = $.mustache(template, this.model.toJSON());
    this.$el.html(template);
  }
});
