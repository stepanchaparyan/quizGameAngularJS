flagApp.controller('navCtrl', function($scope, $log) {
    $scope.onLoadFunction = () => {
        $scope.username = currentUser.data[currentUser.data.length-1].currentUserName;
    }

});
