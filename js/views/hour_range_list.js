var HourRangeListView = RangesView.extend({
  render: function() {
    this.$el.html("");
    this.collection.forEach(function(range){
      var range_view = new HourRangeView({model: range});
      this.$el.append(range_view.render().el);
    }, this);
    return this;
  }
});
