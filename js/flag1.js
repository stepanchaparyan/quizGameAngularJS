flagApp.controller('flag1Ctrl', function($scope, $log) {
  $log.log("10");

  $scope.countriesList = COUNTRIES_EUROPE;
  $scope.randomNumberMain = Math.floor(Math.random() * Math.floor(2));
  $scope.questionsRight = function () {
      $scope.flag = $scope.countriesList[0].flag;
      $scope.rightAnswer = "This is the flag of " + $scope.countriesList[0].name;
  };
  $scope.questionsWrong = function () {
      $scope.flag = $scope.countriesList[0].flag;
      $scope.wrongAnswer = "This is the flag of " + $scope.countriesList[0].name;
  };

/*
  let setRandomNumbers = (continent) => {
    if(continent == "Asia") {
      countriesList = COUNTRIES_ASIA;
    } else if (continent == "Europe") {
      countriesList = COUNTRIES_EUROPE;
    } else if (continent == "Africa") {
      countriesList = COUNTRIES_AFRICA;
    } else if (continent == "Americas") {
      countriesList = COUNTRIES_AMERICAS;
    } else if (continent == "Oceania") {
      countriesList = COUNTRIES_OCEANIA;
    } else {
      countriesList = COUNTRIES;
    }
    randomNumber = Math.floor(Math.random() * countriesList.length-1) + 1;
    randomNumberExcluded = randomExcluded(0, countriesList.length-1, randomNumber);
  }

  //generate randum number Excluded question number
  let randomExcluded = (min, max, excluded) => {
    let n = Math.floor(Math.random() * (max-min) + min);
    if (n >= excluded) n++;
    return n;
  }

  let chooseContinent = () => {
  if(countriesList == COUNTRIES_EUROPE) {
    start("Europe");
  } else if (countriesList == COUNTRIES_ASIA) {
    start("Asia");
  } else if (countriesList == COUNTRIES_AFRICA) {
    start("Africa");
  } else if (countriesList == COUNTRIES_AMERICAS) {
    start("Americas");
  } else if (countriesList == COUNTRIES_OCEANIA) {
    start("Oceania");
  } else {
    start("World");
  }
}

*/


  console.log($scope.randomNumberMain);
  $scope.start = function(continent) {

      $scope.randomNumberMain == 1 ? $scope.questionsRight() : $scope.questionsWrong();

  };


});
