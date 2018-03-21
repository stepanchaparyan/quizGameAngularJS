flagApp.controller('flag1Ctrl', function($scope) {

  $scope.test = 50;
  $scope.randomNumberMain = function() {

    return 555;

    //randomNumberMain = Math.floor(Math.random() * Math.floor(2));
    //randomNumberMain == 1 ? questionsRight() : questionsWrong();
  };


});
