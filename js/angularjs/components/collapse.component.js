com.github.aimmoth.app.component("collapse", {
  templateUrl : "js/angularjs/components/collapse.template.html",
  controllerAs : "controller",
  controller : ["$scope", function ($scope) {
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;
  }]
});