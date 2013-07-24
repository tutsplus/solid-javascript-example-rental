var RangeView = Backbone.View.extend({
  events: {
    "change .plan-end": "endChanged"
  , "click .plan-remove": "wantsToRemove"
  }

, render: function() {
    var hour_ranges = this.renderHourRanges();

    this.$el.html(this.fetchTemplate());
    this.$el.find(".plan-24").append(hour_ranges);

    return this;
  }
, fetchTemplate: function() {
    var template = $("#range-template").html();
    var json = this.model.toJSON();
    return $.mustache(template, json);
  }

, endChanged: function(e) {
    var number = parseInt($(e.target).val());
    this.model.set("end", number);
  }

, wantsToRemove: function() {
    this.model.trigger("wantsToRemove", this.model);
  }

, renderHourRanges: function() {
    return new HourRangeListView({
      collection: this.model.get("hour_ranges")
    }).render().el;
  }
});
