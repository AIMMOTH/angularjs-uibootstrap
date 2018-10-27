com.github.aimmoth.app.component("dateparser", {
  templateUrl : "js/angularjs/components/dateparser.template.html",
  controllerAs : "controller",
  controller : ["$scope", "uibDateParser", function ($scope, uibDateParser) {
    $scope.format = 'yyyy/MM/dd';
    $scope.date = new Date();
  }]
});