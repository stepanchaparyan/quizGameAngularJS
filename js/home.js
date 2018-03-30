flagApp.controller('homeCtrl', function($scope, $rootScope, $log) {

    $scope.onLoadFunction = () => {
        if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].playAsAUserButton == "disabled") {
            angular.element("#playAsAUserButton").attr("disabled", "disabled");
        }
    }

    $scope.goSignUp = () => {
        angular.element('#signupBox').attr("class", "ng-show");
        angular.element('.jumbotron').attr("class", "ng-hide");
    }
    $scope.goLogIn = () => {
        angular.element('#loginBox').attr("class", "ng-show");
        angular.element('.jumbotron').attr("class", "ng-hide");
    }

    $scope.signUp = () => {
      db.loadDatabase({}, function () {
      info = db.getCollection('Info');
      info.insert({
         Name: $scope.inputName,
         Email: $scope.inputEmail,
         Password: $scope.inputPassword,
         MainPoints: 0,
         CapitalPoints: 0,
         FlagPoints: 0,
         playAsAUserButton: "disabled",
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
     $scope.logIn();
     };

    $scope.logIn = () => {
       for (var i = 0; i < info.data.length; i++) {
         if ($scope.inputName == info.data[i].Name & $scope.inputPassword == info.data[i].Password) {
            $scope.noUser = "";
            $scope.userNumber = i;
            $scope.addCurrentUser();
            break;
         } else {
           $scope.noUser = "Wrong username or password.";
         }
       }
     };

    $scope.addCurrentUser = () => {
        db.loadDatabase({}, function () {
            currentUser = db.getCollection('currentUser');
            currentUser.insert({
                currentUserName: $scope.inputName,
                currentUserNumber: $scope.userNumber,
            });
        db.saveDatabase();
        })
        document.location.reload();
    }


});
