com.github.aimmoth.app.component("buttons", {
  templateUrl : "js/angularjs/components/buttons.template.html",
  controllerAs : "controller",
  controller : ["$scope", function ($scope) {
    $scope.singleModel = 1;

    $scope.radioModel = 'Middle';

    $scope.checkModel = {
      left: false,
      middle: true,
      right: false
    };

    $scope.checkResults = [];

    $scope.$watchCollection('checkModel', function () {
      $scope.checkResults = [];
      angular.forEach($scope.checkModel, function (value, key) {
        if (value) {
          $scope.checkResults.push(key);
        }
      });
    });
  }]
});