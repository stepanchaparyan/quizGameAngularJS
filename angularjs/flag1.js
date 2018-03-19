var app = angular.module('flag1App', []);
app.controller('flag1Ctrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";

    $scope.names = COUNTRIES_EUROPE;
});
