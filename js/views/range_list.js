var RangesView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('change', this.render, this);
    this.collection.on('add'   , this.render, this);
    this.collection.on('remove', this.render, this);
  }
, render: function() {
    this.$el.html("");
    this.collection.forEach(function(range){
      var range_view = new RangeView({model: range});
      this.$el.append(range_view.render().el);
    }, this);
    return this;
  }
});
