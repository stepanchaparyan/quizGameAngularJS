flagApp.controller('navCtrl', function($scope, $log) {
    $scope.onLoadFunction = () => {
        $scope.username = info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].Name;
    }

});
