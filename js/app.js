var App = function() {
  this.init = function() {
    this.plan = new Plan();
    this.planView = new PlanView({ model: this.plan, el: "#plan" });
    this.planView.render();
  };
};
