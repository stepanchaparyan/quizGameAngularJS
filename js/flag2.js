// variables for question number and score
let questionNumberFlag2 = 0;
let scoreFlag2 = 0;
let randomNumberMainFlag2;
let randomNumberFlag2;
let randomNumberExcludedFlag2;
let countriesListFlag2;
let randomNumberBetween1_4;
let randomNumberExcluded1;
let randomNumberExcluded2;
let randomNumberExcluded3;
let randomNumberCountriesLengthExcluded1;
let randomNumberCountriesLengthExcluded2;
let randomNumberCountriesLengthExcluded3;

//function for hide first card and show question cards
let hideAndShowFlag2 = () => {
  document.getElementById('mainCards').classList.add("hideDisplay");
  document.getElementById('quizResults').classList.remove("hideDisplay");
  document.getElementById('resultMessage').classList.add("hideDisplay");
}

//generate and print right or wrong question
let questionsMainFlag2 = () => {
  questionFlag2();
  setRandomNumbersBetween1_4();
  setRandomNumbersCountriesLength();
  getRandumAnswerFlag2();
}

//print question
let questionFlag2 = () => document.getElementById("quizQuestions").innerHTML = "Which is the capital of " + countriesListFlag2[randomNumberFlag2].name;

let getRandumAnswerFlag2 = () => {
  var answer = [];
  answer[0] = countriesListFlag2[randomNumberFlag2].capital;
  answer[1] = countriesListFlag2[randomNumberCountriesLengthExcluded1].capital;
  answer[2] = countriesListFlag2[randomNumberCountriesLengthExcluded2].capital;
  answer[3] = countriesListFlag2[randomNumberCountriesLengthExcluded3].capital;
  document.getElementById("answer1").innerHTML = answer[randomNumberBetween1_4-1];
  document.getElementById("answer2").innerHTML = answer[randomNumberExcluded1-1];
  document.getElementById("answer3").innerHTML = answer[randomNumberExcluded2-1];
  document.getElementById("answer4").innerHTML = answer[randomNumberExcluded3-1];
}

var setRandomNumbersBetween1_4 = () => {
  function generateRandom1(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === randomNumberBetween1_4) ? generateRandom1(min, max) : num;
  }
  function generateRandom2(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
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
    return (num === randomNumberFlag2) ? generateRandom1(min, max) : num;
  }
  function generateRandom2(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === randomNumberFlag2 || num === randomNumberCountriesLengthExcluded1) ? generateRandom2(min, max) : num;
  }
  function generateRandom3(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === randomNumberFlag2 || num === randomNumberCountriesLengthExcluded1 || num === randomNumberCountriesLengthExcluded2) ? generateRandom3(min, max) : num;
  }
  randomNumberCountriesLengthExcluded1 = generateRandom1(1, countriesListFlag2.length-1);
  randomNumberCountriesLengthExcluded2 = generateRandom2(1, countriesListFlag2.length-1);
  randomNumberCountriesLengthExcluded3 = generateRandom3(1, countriesListFlag2.length-1);
}

let testFlag2 = () => {
  if (this.event.target.innerHTML == countriesListFlag2[randomNumberFlag2].capital) {
    setNewCSSFlag2(this.event.target.id, "green");
    score += 1;
    resultFlag2();
    changeDisabledFlag2();
    getFocusFlag2();
  } else {
    setNewCSSFlag2(this.event.target.id, "red");
    addRightAnswerFlag2();
    resultFlag2();
    changeDisabledFlag2();
    getFocusFlag2();
  }
}

//print Right answer
let addRightAnswerFlag2 = () => document.getElementById("resultMessage").innerHTML = "Right answer: " + countriesListFlag2[randomNumberFlag2].capital + " is the capital of " + countriesListFlag2[randomNumberFlag2].name;

//list of functions/action for next button
let nextFlag2 = () => {
  questionNumberFlag2 += 1;
  document.getElementById('answer1').removeAttribute("class");
  document.getElementById('answer2').removeAttribute("class");
  document.getElementById('answer3').removeAttribute("class");
  document.getElementById('answer4').removeAttribute("class");
  document.getElementById('resultMessage').removeAttribute("class");
  document.getElementById('resultMessage').setAttribute("class", "hideDisplay");
  changeDisabledFlag2();
  chooseContinentFlag2();
}

let getFocusFlag2 = () => document.getElementById("btnNext").focus();

//generate CSS for right or wrong answer
let setNewCSSFlag2 = (id, color) => {
  if (color == "green") {
    document.getElementById(id).setAttribute("class", "greenBorder");
    document.getElementById('resultMessage').setAttribute("class", "greenBorder");
    document.getElementById("resultMessage").innerHTML = "You are right";
  } else if (color == "red") {
    document.getElementById(id).setAttribute("class", "redBorder");
    document.getElementById('resultMessage').setAttribute("class", "redBorder");
    document.getElementById("resultMessage").innerHTML = "Sorry, but the question was right";
  }
}

//change element from disabled to abled and vice versa
let changeDisabledFlag2 = () => {
  document.getElementById('btnNext').disabled = !document.getElementById('btnNext').disabled;
  document.getElementById('answer1').disabled = !document.getElementById('answer1').disabled;
  document.getElementById('answer2').disabled = !document.getElementById('answer2').disabled;
  document.getElementById('answer3').disabled = !document.getElementById('answer3').disabled;
  document.getElementById('answer4').disabled = !document.getElementById('answer4').disabled;
}

//print score and question number
let resultFlag2 = () => {
  document.getElementById("resultStep").innerHTML = " Question: " + (questionNumberFlag2 + 1) + " /20";
  document.getElementById("resultScore").innerHTML = " Score: " + scoreFlag2 + " /20";
}

let finalResultFlag2 = () => {
  let text;
  if (questionNumberFlag2 == 20) {
    text = "Thanks you, you got " + scoreFlag2 + " points";
  document.getElementById("finalScore").innerHTML = text;
  document.getElementById('main').classList.add("hideDisplay");
  document.getElementById('feedbackPage').removeAttribute("class");
  }
}


// need to update name
let setDisabledThisGameFlag2 = () => {
  if (countriesListFlag2 == COUNTRIES_ASIA) {
    addDisabledCapital2("asia");
  } else if (countriesListFlag2 == COUNTRIES_EUROPE) {
    addDisabledCapital2("europe");
  } else if (countriesListFlag2 == COUNTRIES_AFRICA) {
    addDisabledCapital2("africa");
  } else if (countriesListFlag2 == COUNTRIES_AMERICAS) {
    addDisabledCapital2("americas");
  } else if (countriesListFlag2 == COUNTRIES_OCEANIA) {
    addDisabledCapital2("oceania");
  } else {
    addDisabledCapital2("world");
  }
}

let checkDisabledInLoadFlag2 = () => {
    console.log("len " + info.data.length);
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia2 == "disabled") {
      document.getElementById("asia").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe2 == "disabled") {
      document.getElementById("europe").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa2 == "disabled") {
      document.getElementById("africa").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas2 == "disabled") {
      document.getElementById("americas").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania2 == "disabled") {
      document.getElementById("oceania").setAttribute("disabled", "disabled");
    }
    if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world2 == "disabled") {
      document.getElementById("world").setAttribute("disabled", "disabled");
    }
}

let checkTitleOnLoadFlag2 = () => {
  if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world1 == "disabled") {
    document.getElementById("leftCard").removeAttribute("disabled");
    document.getElementById("knightTitle").innerHTML = "Baron";
  }
  if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia2 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe2 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa2 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas2 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania2 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world2 == "disabled") {
    document.getElementById("knightTitle").innerHTML = "Graf";
    document.getElementById("levelResult").removeAttribute("class");
    document.getElementById("nextLevel").innerHTML = "Thank you";
  }
}

//generateRandum numbers for question
let setRandomNumbersFlag2 = (continent) => {
  if(continent == "Asia") {
    countriesListFlag2 = COUNTRIES_ASIA;
  } else if (continent == "Europe") {
    countriesListFlag2 = COUNTRIES_EUROPE;
  } else if (continent == "Africa") {
    countriesListFlag2 = COUNTRIES_AFRICA;
  } else if (continent == "Americas") {
    countriesListFlag2 = COUNTRIES_AMERICAS;
  } else if (continent == "Oceania") {
    countriesListFlag2 = COUNTRIES_OCEANIA;
  } else {
    countriesListFlag2 = COUNTRIES;
  }
  randomNumberFlag2 = Math.floor(Math.random() * countriesListFlag2.length-1) + 1;
}

let chooseContinentFlag2 = () => {
  if(countriesListFlag2 == COUNTRIES_EUROPE) {
    startFlag2("Europe");
  } else if (countriesListFlag2 == COUNTRIES_ASIA) {
    startFlag2("Asia");
  } else if (countriesListFlag2 == COUNTRIES_AFRICA) {
    startFlag2("Africa");
  } else if (countriesListFlag2 == COUNTRIES_AMERICAS) {
    startFlag2("Americas");
  } else if (countriesListFlag2 == COUNTRIES_OCEANIA) {
    startFlag2("Oceania");
  } else {
    startFlag2("World");
  }
}

let startFlag2 = (continent) => {
  setRandomNumbersFlag2(continent);
  startAllFlag2();
}

let startAllFlag2 = () => {
  hideAndShowFlag2();
  questionsMainFlag2();
  resultFlag2();
  finalResultFlag2();
}
