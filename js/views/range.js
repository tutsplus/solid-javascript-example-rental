var RangeView = Backbone.View.extend({
  render: function() {
    var template = $("#range-template").html();
    this.$el.html($.mustache(template,this.model.toJSON()));
    return this;
  } 
});
