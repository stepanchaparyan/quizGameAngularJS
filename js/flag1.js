flagApp.controller('flag1Ctrl', function($scope, $log) {
  $scope.countriesList;
  $scope.score = 0;
  $scope.questionNumber = 0;

  $scope.setQuestion = () => {
      $scope.randomNumberMain = Math.floor(Math.random() * Math.floor(2));
      $scope.randomNumberMain == 1 ? $scope.questionsRight() : $scope.questionsWrong();
  };

  $scope.questionsRight = function () {
      $scope.flag = $scope.countriesList[$scope.randomNumber].flag;
      $scope.question = "This is the flag of " + $scope.countriesList[$scope.randomNumber].name;
  };
  $scope.questionsWrong = function () {
      $scope.flag = $scope.countriesList[$scope.randomNumber].flag;
      $scope.question = "This is the flag of " + $scope.countriesList[$scope.randomNumberExcluded].name;
  };

  $scope.setRandomNumbers = (continent) => {
    if(continent == "Asia") {
      $scope.countriesList = COUNTRIES_ASIA;
    } else if (continent == "Europe") {
      $scope.countriesList = COUNTRIES_EUROPE;
    } else if (continent == "Africa") {
      $scope.countriesList = COUNTRIES_AFRICA;
    } else if (continent == "Americas") {
      $scope.countriesList = COUNTRIES_AMERICAS;
    } else if (continent == "Oceania") {
      $scope.countriesList = COUNTRIES_OCEANIA;
    } else {
      $scope.countriesList = COUNTRIES;
    }
    $scope.randomNumber = Math.floor(Math.random() * $scope.countriesList.length-1) + 1;
    $log.log("randomNumber is " + $scope.randomNumber);
    $scope.randomNumberExcluded = $scope.randomExcluded(0, $scope.countriesList.length-1, $scope.randomNumber);
  }

  //generate randum number Excluded question number
  $scope.randomExcluded = (min, max, excluded) => {
    let n = Math.floor(Math.random() * (max-min) + min);
    if (n >= excluded) n++;
    return n;
  }

  $scope.testRight = () => {
    $scope.randomNumberMain == 1 ? ($scope.setNewCSS("green"), $scope.score += 1, $scope.result()) : ($scope.setNewCSS("red"), $scope.addRightAnswer());
    $scope.changeDisabled();
    angular.element('#btnNext').focus();
  }

  $scope.testWrong = () => {
    $scope.randomNumberMain == 1 ? ($scope.setNewCSS("red")) : ($scope.setNewCSS("green"), $scope.addRightAnswer(), $scope.score += 1, $scope.result());
    $scope.changeDisabled();
    angular.element('#btnNext').focus();
  }

  $scope.classAnswerText = [];
  $scope.setNewCSS = (color) => {
    if (color == "green") {
      $scope.classAnswerText.push('greenBorder');
      $scope.answerText = "You are right";
    } else if (color == "red") {
      $scope.classAnswerText.push('redBorder');
      $scope.answerText = "Sorry, but the question was right";
    }
  }

  $scope.addRightAnswer = () => $scope.answerText = "Right answer: This is the flag of " + $scope.countriesList[$scope.randomNumber].name;

  //print score and question number
  $scope.result = () => {
      $scope.resultStep = " Question: " + ($scope.questionNumber + 1) + " /20";
      $scope.resultScore = " Score: " + $scope.score + " /20";
  }

  //change element from disabled to abled and vice versa
  $scope.changeDisabled = () => {
      document.getElementById('btnNext').disabled = !document.getElementById('btnNext').disabled;
      $scope.disabledButton = !$scope.disabledButton;
  }

  //list of functions/action for next button
  $scope.next = () => {
      $scope.questionNumber += 1;
      $scope.answerText = "";
      $scope.classAnswerText.pop();
      $scope.changeDisabled();
      $scope.chooseContinent();
  }

  $scope.chooseContinent = () => {
    if($scope.countriesList == COUNTRIES_EUROPE) {
      $scope.start("Europe");
    } else if ($scope.countriesList == COUNTRIES_ASIA) {
      $scope.start("Asia");
    } else if ($scope.countriesList == COUNTRIES_AFRICA) {
      $scope.start("Africa");
    } else if ($scope.countriesList == COUNTRIES_AMERICAS) {
      $scope.start("Americas");
    } else if ($scope.countriesList == COUNTRIES_OCEANIA) {
      $scope.start("Oceania");
    } else {
      $scope.start("World");
    }
  }

  $scope.finalResult = () => {
      if ($scope.questionNumber == 5) {
          let text = "Thank you, you got " + $scope.score + " points";
          $scope.finalScore = text;
          document.getElementById('main').classList.add("hideDisplay");
          document.getElementById('feedbackPage').removeAttribute("class");
      }
  }

let setDisabledThisGame = () => {
  if (countriesList == COUNTRIES_ASIA) {
    addDisabledCapital1("asia");
  } else if (countriesList == COUNTRIES_EUROPE) {
    addDisabledCapital1("europe");
  } else if (countriesList == COUNTRIES_AFRICA) {
    addDisabledCapital1("africa");
  } else if (countriesList == COUNTRIES_AMERICAS) {
    addDisabledCapital1("americas");
  } else if (countriesList == COUNTRIES_OCEANIA) {
    addDisabledCapital1("oceania");
  } else {
    addDisabledCapital1("world");
  }
}

let checkDisabledInLoad = () => {
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia1 == "disabled") {
      document.getElementById("asia").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe1 == "disabled") {
      document.getElementById("europe").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa1 == "disabled") {
      document.getElementById("africa").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas1 == "disabled") {
      document.getElementById("americas").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania1 == "disabled") {
      document.getElementById("oceania").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world1 == "disabled") {
      document.getElementById("world").setAttribute("disabled", "disabled");
    }
  }

let checkTitleOnLoad = () => {
  if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world1 == "disabled") {
    document.getElementById("levelResult").removeAttribute("class");
    document.getElementById("leftCard").removeAttribute("disabled");
    document.getElementById("knightTitle").innerHTML = "Baron";
  }
}


  $scope.start = (continent) => {
      $scope.setRandomNumbers(continent);
      $scope.setQuestion();
      $log.log("countriesList length is  " + $scope.countriesList.length);
      $log.log("1-right, 0-wrong  --  " + $scope.randomNumberMain);
      $scope.finalResult();
  };


});
