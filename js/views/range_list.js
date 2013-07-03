var RangesView = Backbone.View.extend({
  render: function() {
    this.$el.html("");
    this.collection.forEach(function(range){
      var range_view = new RangeView({model: range});
      this.$el.append(range_view.render().el);
    }, this);
    return this;
  }
});
