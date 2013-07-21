var RangeView = Backbone.View.extend({
  tagName: "li"
, className: "import"
, render: function() {
    var template    = $("#range-template").html();
    var hour_ranges = this.renderHourRanges();
    var json        = this.transformModel();

    this.$el.html($.mustache(template, json));
    this.$el.find(".plan-24").append(hour_ranges);

    return this;
  }
, events: {
    "change .plan-end"  : "endChanged"
  , "click .plan-remove" : "remove"
  }

, endChanged: function(e) {
    var value = parseInt($(e.target).val());
    this.model.set("end", value);
  }

, remove: function() {
    this.model.trigger("wantsToRemove", this.model);
  }

, renderHourRanges: function() {
    return new HourRangeListView({
      collection: this.model.get("hour_ranges")
    }).render().el;
  }

, transformModel: function() {
    var duplicateModel = _.clone(this.model);

    if(duplicateModel.get("end") == Range.MAX) {
      duplicateModel.set("end", "--", { silent: true });
    }

    var json = duplicateModel.toJSON();
    delete duplicateModel;

    return json;
  }
});
