flagApp.controller('homeCtrl', function($scope, $rootScope, $log) {

    $scope.goSignUp = () => {
        angular.element('#signupBox').attr("class", "ng-show");
        angular.element('.jumbotron').attr("class", "ng-hide");
    }
    $scope.goLogIn = () => {
        angular.element('#loginBox').attr("class", "ng-show");
        angular.element('.jumbotron').attr("class", "ng-hide");
    }

    $scope.signUp = () => {
      $log.log("OK ");
      db.loadDatabase({}, function () {
      info = db.getCollection('Info');
      info.insert({
         Name: $scope.inputName,
         Email: $scope.inputEmail,
         Password: $scope.inputPassword,
         MainPoints: 0,
         CapitalPoints: 0,
         FlagPoints: 10,
         asia1: "",
         europe1: "",
         africa1: "",
         americas1: "",
         oceania1: "",
         world1: "",
         asia2: "",
         europe2: "",
         africa2: "",
         americas2: "",
         oceania2: "",
         world2: ""
       });
     db.saveDatabase();
     })
     };

    $scope.findUserName = () => {
       for (var i = 0; i < info.data.length; i++) {
         if ($scope.inputName == info.data[i].Name & $scope.inputPassword == info.data[i].Password) {
           $scope.userNumber = i;
           break;
         }
       }
     };

    $scope.logIn = () => {
        $scope.findUserName();
        db.loadDatabase({}, function () {
            currentUser = db.getCollection('currentUser');
            currentUser.insert({
                currentUserName: $scope.inputName,
                currentUserNumber: $scope.userNumber,
            });
        db.saveDatabase();
        })
        $log.log("home " + $scope.userNumber);
    }


});
