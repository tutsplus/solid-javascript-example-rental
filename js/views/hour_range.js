var HourRangeView = Backbone.View.extend({
  tagName: "li"
, className: "import-24 indented-checkbox"
, render: function() {
    var template = $("#hour-range-template").html();
    this.$el.html($.mustache(template,this.model.toJSON()));
    return this;
  }
, events: {
    "change .plan-24-end"  : "endChanged"
  , "click .plan-24-remove" : "remove"
  }

, endChanged: function(e) {
    alert("")
    var value = parseInt($(e.target).val());
    this.model.set("end", value);
  }

, remove: function() {
    this.model.trigger("wantsToRemove", this.model);
  }
});
