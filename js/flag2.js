flagApp.controller('flag2Ctrl', function($scope, $log) {
  $scope.countriesList;
  $scope.score = 0;
  $scope.questionNumber = 0;

  $scope.onLoadFunction = () => {
      $scope.checkDisabledInLoad();
  }

/*
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
*/

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
    }

    $scope.setQuestion = () => {
        $scope.question();
        $scope.setRandomNumbersBetween1_4();
        $scope.setRandomNumbersCountriesLength();
        $scope.getRandumAnswer();
    }

    $scope.question = () => $scope.question = "Which is the flag of " + $scope.countriesList[$scope.randomNumber].name;

    $scope.getRandumAnswer = () => {
        let answer = [];
        answer[0] = countriesList[randomNumber].name;
        answer[1] = countriesList[randomNumberCountriesLengthExcluded1].name;
        answer[2] = countriesList[randomNumberCountriesLengthExcluded2].name;
        answer[3] = countriesList[randomNumberCountriesLengthExcluded3].name;
        $scope.answer1 = answer[randomNumberBetween1_4-1];
        $scope.answer2 = answer[randomNumberExcluded1-1];
        $scope.answer3 = answer[randomNumberExcluded2-1];
        $scope.answer4 = answer[randomNumberExcluded3-1];
    }

    $scope.setRandomNumbersBetween1_4 = () => {
        function generateRandom1(min, max) {
            let num = Math.floor(Math.random() * (max - min + 1)) + min;
            return (num === randomNumberBetween1_4) ? generateRandom1(min, max) : num;
        }
        function generateRandom2(min, max) {
            let num = Math.floor(Math.random() * (max - min + 1)) + min;
            return (num === randomNumberBetween1_4 || num === randomNumberExcluded1) ? generateRandom2(min, max) : num;
        }
        function generateRandom3(min, max) {
            var num = Math.floor(Math.random() * (max - min + 1)) + min;
            return (num === randomNumberBetween1_4 || num === randomNumberExcluded1 || num === randomNumberExcluded2) ? generateRandom3(min, max) : num;
        }
        randomNumberBetween1_4 = Math.floor(Math.random() * 4) + 1;
        randomNumberExcluded1 = generateRandom1(1, 4);
        randomNumberExcluded2 = generateRandom2(1, 4);
        randomNumberExcluded3 = generateRandom3(1, 4);
    }

  var setRandomNumbersCountriesLength = () => {
    function generateRandom1(min, max) {
      var num = Math.floor(Math.random() * (max - min + 1)) + min;
      return (num === randomNumber) ? generateRandom1(min, max) : num;
    }
    function generateRandom2(min, max) {
      var num = Math.floor(Math.random() * (max - min + 1)) + min;
      return (num === randomNumber || num === randomNumberCountriesLengthExcluded1) ? generateRandom2(min, max) : num;
    }
    function generateRandom3(min, max) {
      var num = Math.floor(Math.random() * (max - min + 1)) + min;
      return (num === randomNumber || num === randomNumberCountriesLengthExcluded1 || num === randomNumberCountriesLengthExcluded2) ? generateRandom3(min, max) : num;
    }
    randomNumberCountriesLengthExcluded1 = generateRandom1(1, countriesList.length-1);
    randomNumberCountriesLengthExcluded2 = generateRandom2(1, countriesList.length-1);
    randomNumberCountriesLengthExcluded3 = generateRandom3(1, countriesList.length-1);
  }

  let test = () => {
    if (this.event.target.innerHTML == countriesList[randomNumber].capital) {
      setNewCSS(this.event.target.id, "green");
      score += 1;
      result();
      changeDisabled();
      getFocus();
    } else {
      setNewCSS(this.event.target.id, "red");
      addRightAnswer();
      result();
      changeDisabled();
      getFocus();
    }
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

  $scope.disabledNext = true;
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
          angular.element('#main').attr("class", "ng-hide");
          angular.element("#feedbackPage").removeAttr("class");
      }
  }

  $scope.setDisabledThisGame = () => {
      if ($scope.countriesList == COUNTRIES_ASIA) {
            $scope.addDisabledFlag2("asia");
          } else if ($scope.countriesList == COUNTRIES_EUROPE) {
            $scope.addDisabledFlag2("europe");
          } else if ($scope.countriesList == COUNTRIES_AFRICA) {
            $scope.addDisabledFlag2("africa");
          } else if ($scope.countriesList == COUNTRIES_AMERICAS) {
            $scope.addDisabledFlag2("americas");
          } else if ($scope.countriesList == COUNTRIES_OCEANIA) {
            $scope.addDisabledFlag2("oceania");
          } else {
            $scope.addDisabledFlag2("world");
      }
    }

    $scope.addDisabledFlag1 = (continent) => {
        db.loadDatabase({}, function () {
        info = db.getCollection('Info');
        var user = info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].Name;
        if (continent == "asia") {
          info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia1 = "disabled";
        } else if (continent == "africa") {
          info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa1 = "disabled";
        } else if (continent == "europe") {
          info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe1 = "disabled";
        } else if (continent == "oceania") {
          info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania1 = "disabled";
        } else if (continent == "world") {
          info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world1 = "disabled";
        } else if (continent == "americas") {
          info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas1 = "disabled";
        }
        info.update(info.data);
        db.saveDatabase();
        })
    }

    $scope.checkDisabledInLoad = () => {
        if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia1 == "disabled") {
            angular.element("#asia").attr("disabled", "disabled");
        }
        if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe1 == "disabled") {
            angular.element("#europe").attr("disabled", "disabled");
        }
        if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa1 == "disabled") {
            angular.element("#africa").attr("disabled", "disabled");
        }
        if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas1 == "disabled") {
            angular.element("#americas").attr("disabled", "disabled");
        }
        if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania1 == "disabled") {
            angular.element("#oceania").attr("disabled", "disabled");
        }
        if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world1 == "disabled") {
            angular.element("#world").attr("disabled", "disabled");
        }
    }

  $scope.nextGame = () => {
      $scope.addPoints();
      $scope.pointFromDB = info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].FlagPoints;
      $scope.setDisabledThisGame();
      document.location.reload();
  }

  $scope.addPoints = () => {
      db.loadDatabase({}, function () {
      info = db.getCollection('Info');
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].FlagPoints += $scope.score;
      db.saveDatabase();
      });
  }

   $scope.resetPoints = () => {
      db.loadDatabase({}, function () {
        info = db.getCollection('Info');
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].FlagPoints = 0;
        db.saveDatabase();
      });
    }

    $scope.resetDisabled = () => {
      db.loadDatabase({}, function () {
        info = db.getCollection('Info');
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia1 = "";
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia2 = "";
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa1 = "";
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa2 = "";
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe1 = "";
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe2 = "";
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas1 = "";
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas2 = "";
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania1 = "";
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania2 = "";
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world1 = "";
        info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world2 = "";
        info.update(info.data);
        db.saveDatabase();
      })
      document.location.reload();
    }

    $scope.tryAgain = () => {
        $scope.resetPoints();
        $scope.resetDisabled();
    }

    $scope.start = (continent) => {
        $scope.setRandomNumbers(continent);
        $scope.setQuestion();
        $scope.result();
        $scope.finalResult();
      };

});
