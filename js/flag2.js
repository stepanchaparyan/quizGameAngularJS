flagApp.controller('flag2Ctrl', function($scope, $log) {
    $scope.countriesList;
    $scope.score = 0;
    $scope.questionNumber = 0;

    $scope.onLoadFunction = () => {
        $scope.checkDisabledInLoad();
    }

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

    $scope.question = () => {
        $scope.questionText = "Choose the correct answer";
        $scope.flag = $scope.countriesList[$scope.randomNumber].flag;
    }

    $scope.getRandumAnswer = () => {
        let answer = [];
        answer[0] = $scope.countriesList[$scope.randomNumber].name;
        answer[1] = $scope.countriesList[$scope.randomNumberCountriesLengthExcluded1].name;
        answer[2] = $scope.countriesList[$scope.randomNumberCountriesLengthExcluded2].name;
        answer[3] = $scope.countriesList[$scope.randomNumberCountriesLengthExcluded3].name;
        $scope.answer1 = answer[$scope.randomNumberBetween1_4-1];
        $scope.answer2 = answer[$scope.randomNumberExcluded1-1];
        $scope.answer3 = answer[$scope.randomNumberExcluded2-1];
        $scope.answer4 = answer[$scope.randomNumberExcluded3-1];
    }

    $scope.setRandomNumbersBetween1_4 = () => {
        $scope.generateRandom1 = (min, max) => {
            let num = Math.floor(Math.random() * (max - min + 1)) + min;
            return (num === $scope.randomNumberBetween1_4) ? $scope.generateRandom1(min, max) : num;
        }
        $scope.generateRandom2 = (min, max) => {
            let num = Math.floor(Math.random() * (max - min + 1)) + min;
            return (num === $scope.randomNumberBetween1_4 || num === $scope.randomNumberExcluded1) ? $scope.generateRandom2(min, max) : num;
        }
        $scope.generateRandom3 = (min, max) => {
            var num = Math.floor(Math.random() * (max - min + 1)) + min;
            return (num === $scope.randomNumberBetween1_4 || num === $scope.randomNumberExcluded1 || num === $scope.randomNumberExcluded2) ? $scope.generateRandom3(min, max) : num;
        }
        $scope.randomNumberBetween1_4 = Math.floor(Math.random() * 4) + 1;
        $scope.randomNumberExcluded1 = $scope.generateRandom1(1, 4);
        $scope.randomNumberExcluded2 = $scope.generateRandom2(1, 4);
        $scope.randomNumberExcluded3 = $scope.generateRandom3(1, 4);
    }

    $scope.setRandomNumbersCountriesLength = () => {
        $scope.generateRandom1 = (min, max) => {
            var num = Math.floor(Math.random() * (max - min + 1)) + min;
            return (num === $scope.randomNumber) ? $scope.generateRandom1(min, max) : num;
        }
        $scope.generateRandom2 = (min, max) => {
            var num = Math.floor(Math.random() * (max - min + 1)) + min;
            return (num === $scope.randomNumber || num === $scope.randomNumberCountriesLengthExcluded1) ? $scope.generateRandom2(min, max) : num;
        }
        $scope.generateRandom3 = (min, max) => {
            var num = Math.floor(Math.random() * (max - min + 1)) + min;
            return (num === $scope.randomNumber || num === $scope.randomNumberCountriesLengthExcluded1 || num === $scope.randomNumberCountriesLengthExcluded2) ? $scope.generateRandom3(min, max) : num;
        }
        $scope.randomNumberCountriesLengthExcluded1 = $scope.generateRandom1(1, $scope.countriesList.length-1);
        $scope.randomNumberCountriesLengthExcluded2 = $scope.generateRandom2(1, $scope.countriesList.length-1);
        $scope.randomNumberCountriesLengthExcluded3 = $scope.generateRandom3(1, $scope.countriesList.length-1);
    }

    $scope.test = function (event) {
        if (event.target.innerHTML == $scope.countriesList[$scope.randomNumber].name) {
            $scope.setNewCSS("green");
            $scope.score += 1;
            $scope.result();
            $scope.changeDisabled();
            angular.element('#btnNext').focus();
          } else {
            $scope.setNewCSS("red");
            $scope.addRightAnswer();
            $scope.result();
            $scope.changeDisabled();
            angular.element('#btnNext').focus();
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

    $scope.addDisabledFlag2 = (continent) => {
        db.loadDatabase({}, function () {
        info = db.getCollection('Info');
        var user = info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].Name;
        if (continent == "asia") {
          info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia2 = "disabled";
        } else if (continent == "africa") {
          info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa2 = "disabled";
        } else if (continent == "europe") {
          info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe2 = "disabled";
        } else if (continent == "oceania") {
          info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania2 = "disabled";
        } else if (continent == "world") {
          info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world2 = "disabled";
        } else if (continent == "americas") {
          info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas2 = "disabled";
        }
        info.update(info.data);
        db.saveDatabase();
        })
    }

    $scope.checkDisabledInLoad = () => {
        if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia2 == "disabled") {
            angular.element("#asia2").attr("disabled", "disabled");
        }
        if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe2 == "disabled") {
            angular.element("#europe2").attr("disabled", "disabled");
        }
        if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa2 == "disabled") {
            angular.element("#africa2").attr("disabled", "disabled");
        }
        if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas2 == "disabled") {
            angular.element("#americas2").attr("disabled", "disabled");
        }
        if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania2 == "disabled") {
            angular.element("#oceania2").attr("disabled", "disabled");
        }
        if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world2 == "disabled") {
            angular.element("#world2").attr("disabled", "disabled");
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
