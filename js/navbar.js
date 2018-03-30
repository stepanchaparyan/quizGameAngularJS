flagApp.controller('navCtrl', function($scope, $rootScope, $log) {

    $scope.currentUser = info.data[currentUser.data[currentUser.data.length-1].currentUserNumber];
    $scope.onLoadFunction = () => {
        $scope.username = $scope.currentUser.Name;
    }

    $scope.signOut = () => {
      db.loadDatabase({}, function () {
            currentUser = db.getCollection('currentUser');
            currentUser.insert({
                currentUserName: info.data[0].Name,
                currentUserNumber: 0,
            });
        db.saveDatabase();
        })
      db.loadDatabase({}, function () {
            info = db.getCollection('Info');
            info.data[0].FlagPoints = 0;
            info.data[0].asia1 = "";
            info.data[0].asia2 = "";
            info.data[0].africa1 = "";
            info.data[0].africa2 = "";
            info.data[0].europe1 = "";
            info.data[0].europe2 = "";
            info.data[0].americas1 = "";
            info.data[0].americas2 = "";
            info.data[0].oceania1 = "";
            info.data[0].oceania2 = "";
            info.data[0].world1 = "";
            info.data[0].world2 = "";
            info.update(info.data);
            db.saveDatabase();
      });
      document.location.reload();
    }

});
