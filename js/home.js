flagApp.controller('homeCtrl', function($scope, $log) {

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
         Name: "testname",
         Email: "testmail",
         Password: "testpass",
         MainPoints: 0,
         CapitalPoints: 0,
         FlagPoints: 0,
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


});
