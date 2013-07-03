var App = function() {
  this.init = function () {
    this.plan = new Plan();
    this.planView = new PlanView({ el: '#plan .plan-rangelist', model: this.plan });
    this.planView.render();
  };
};

$(function() {
  window.app = new App();
  app.init();
});
