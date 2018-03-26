flagApp.controller('rightLeftCtrl', function($scope, $log) {
  $scope.onLoadFunction = () => {
      $scope.pointFromDB = info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].FlagPoints;
      $scope.checkTitleOnLoad();
  }


  $scope.knightTitle = "Knight";
  $scope.checkTitleOnLoad = () => {
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia1 == "disabled" &&
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe1 == "disabled" &&
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa1 == "disabled" &&
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas1 == "disabled" &&
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania1 == "disabled" &&
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world1 == "disabled") {
          angular.element("#levelResult").removeAttr("disabled");
          $scope.knightTitle = "Baron";
      }
    }

  });


/*
$(document).ready(function(){
$('.bxslider').bxSlider({
  auto: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 600,
  speed: 800,
  randomStart: true,
  responsive: true,
  controls: false
});
});
*/
