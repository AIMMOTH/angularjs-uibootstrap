
com = {
    github : {
      aimmoth : {
        description : "AngularJS with UIBoostrap"
      }
    }
};

com.github.aimmoth.app = angular.module("app", ["ui.bootstrap"]);

com.github.aimmoth.app.controller("ListController", [function() {
  
  var controller = this;
  
  controller.list = [{
    name : "Carl",
    age : 37
  }, {
    name : "Carro",
    age : 36
  }];
}]);