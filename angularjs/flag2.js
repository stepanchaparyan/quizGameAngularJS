var app = angular.module('flagApp', []);
app.controller('flag2Ctrl', function($scope) {
    $scope.firstName= "John2222";
    $scope.lastName= "Doe2222";

    $scope.names = COUNTRIES_EUROPE;
});
