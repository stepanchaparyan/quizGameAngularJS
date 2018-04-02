flagApp.controller('rightLeftCtrl', function($scope, $rootScope, $log) {

  $scope.currentUser = info.data[currentUser.data[currentUser.data.length-1].currentUserNumber];
  $scope.onLoadFunction = () => {
      $scope.pointFromDB = $scope.currentUser.FlagPoints;
      $scope.checkTitleOnLoad();
  }

  $scope.knightTitle = "Knight";
  angular.element('#knight').css('color', 'orangered');
  $scope.checkTitleOnLoad = () => {
    if ($scope.currentUser.asia1 == "disabled" &&
        $scope.currentUser.europe1 == "disabled" &&
        $scope.currentUser.africa1 == "disabled" &&
        $scope.currentUser.americas1 == "disabled" &&
        $scope.currentUser.oceania1 == "disabled" &&
        $scope.currentUser.world1 == "disabled") {
          angular.element("#levelResultFlag1").removeAttr("class");
          angular.element('#buttonFlag2').removeAttr("disabled");
          $scope.knightTitle = "Baron";
          angular.element('#baron').css('color', 'orangered');
          angular.element('#knight').css('color', '#0d618a');
    }
    if ($scope.currentUser.asia2 == "disabled" &&
        $scope.currentUser.europe2 == "disabled" &&
        $scope.currentUser.africa2 == "disabled" &&
        $scope.currentUser.americas2 == "disabled" &&
        $scope.currentUser.oceania2 == "disabled" &&
        $scope.currentUser.world2 == "disabled") {
          angular.element("#levelResultFlag2").removeAttr("class");
          angular.element('#buttonFlag3').removeAttr("disabled");
          $scope.knightTitle = "Graf";
          angular.element('#graf').css('color', 'orangered');
          angular.element('#baron').css('color', '#0d618a');
          angular.element('#knight').css('color', '#0d618a');
        }
      }

  });
