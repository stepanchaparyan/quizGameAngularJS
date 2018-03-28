flagApp.controller('rightLeftCtrl', function($scope, $log) {
  $scope.onLoadFunction = () => {
      $scope.pointFromDB = info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].FlagPoints;
      $scope.checkTitleOnLoad();
  }

  $scope.knightTitle = "Knight";
  angular.element('#knight').css('color', 'orangered');
  $scope.checkTitleOnLoad = () => {
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia1 == "disabled" &&
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe1 == "disabled" &&
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa1 == "disabled" &&
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas1 == "disabled" &&
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania1 == "disabled" &&
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world1 == "disabled") {
          angular.element("#levelResultFlag1").removeAttr("class");
          angular.element('#buttonFlag2').removeAttr("disabled");
          $scope.knightTitle = "Baron";
          angular.element('#baron').css('color', 'orangered');
          angular.element('#knight').css('color', '#0d618a');
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia2 == "disabled" &&
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe2 == "disabled" &&
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa2 == "disabled" &&
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas2 == "disabled" &&
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania2 == "disabled" &&
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world2 == "disabled") {
          angular.element("#levelResultFlag2").removeAttr("class");
          angular.element('#buttonFlag3').removeAttr("disabled");
          $scope.knightTitle = "Graf";
          angular.element('#graf').css('color', 'orangered');
          angular.element('#baron').css('color', '#0d618a');
          angular.element('#knight').css('color', '#0d618a');
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
