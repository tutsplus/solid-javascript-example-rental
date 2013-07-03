var RangeView = Backbone.View.extend({
  tagName: "li"
, className: "import"
, render: function() {
    var template = $("#range-template").html();
    this.$el.html($.mustache(template,this.model.toJSON()));
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
});
