
// TODO: make sure that mysteryNum is always aa 4-digit number...
var mysteryNum = Math.floor(Math.random()*10000+1);
var guessCounter = 0;


// VALIDATE NUMBER
function convertToSingleNum(e) {

  var userGuessDigits = [
    $("#userGuess1").val(),
    $("#userGuess2").val(),
    $("#userGuess3").val(),
    $("#userGuess4").val()
  ]
  var answerDigits = mysteryNum.toString().split('');


// separated version...
  var rnr = 0;
  var removeIndices = userGuessDigits.map(function(digit, i){
    if (digit == answerDigits[i]) {
      rnr++;
      return i;
    }
  })

  removeIndices.forEach(function(index){
    userGuessDigits.splice(index, 1);
    answerDigits.splice(index, 1);
  })


// array.includes    ... or array.indexOf
//


// non-fancy version...
  // var rnr = userGuessDigits.map(function(digit, i){
  //   if (digit == answerDigits[i]) {
  //     return i;
  //   }
  // }).reduce(function(removeIndices, index){
  //   userGuessDigits.splice(index, 1);
  //   answerDigits.splice(index, 1);
  //   return removeIndices.length;
  // })

// fancy version....
  // var rnr = userGuessDigits
  //   .map((digit, i) => (digit == answerDigits[i]) ? i : null)
  //   .filter(el => !!el)
  //   .reduce((removeIndices, index) => {
  //       userGuessDigits.splice(index, 1);
  //       answerDigits.splice(index, 1);
  //       return removeIndices.length;
  //   })


  var rnr = userGuessDigits.reduce(function(counter, digit, i){
    if (digit == answerDigits[i]) {
      counter++;
      // remove this digit from both arrays...
      userGuessDigits.splice(i, 1);
      answerDigits.splice(i, 1);
    }
    return counter;
  }, 0);




  var userGuessNum = "";

  for (var i = 0; i < userGuessDigit.length; i++){
    userGuessNum = userGuessNum + userGuessDigit[i]
  }

  var answer = mysteryNum.toString();
  var tempAnswer = answer;
  var rightGuessCount = 0;
  var closeGuessCount = 0;

  for(var i = 0; i <userGuessNum.length; i++){
    if (tempAnswer.charAt(i) == userGuessNum.charAt(i)){
      rightGuessCount++;
      tempAnswer.splice(i, 1);
      userGuessNum.splice(i,1);
    }
  for (var i = 0; i < userGuessNum.Length; i++){
    if (userGuessNum.charAt(i)) ==
  }

  }

  console.log("this is the answer: " + answer);
  console.log("this was your guess: " + userGuessNum);
}


var userGuess = $("#userGuessButton").on("click", convertToSingleNum);





// On Submit:
// Create: Box 1, Box 2, Box 3, Box 4
// Edit Color: if first num is equal to first num of secret num: green, if first
// num is equal to any num in secret num: yellow, else: red
// Append: four boxes to outputBox

// if guess != mysteryNum - clear userGuess field, add to guessCounter and restart process above
// If guess == mysteryNum; congratulate! You guessed in "guessCounter" tries
// Send guessCounter to database

// ----------

  // var p = $("<p></p>")

  //
  // if(userGuessLatest.length < 1){
  //   p.html("Please Guess a Digit");
  // }
  //
  // else if (userGuessLatest.length > 4){
  //   p.html("You guessed a " + userGuessLatest.length + "-Digit Number. Please Guess a 4-Digit number.");
  // }
  //
  // else {
  //   // Need to figure out how to validate to make sure its all numbers
  //   var rx = new RegExp("^\D")
  //   if (rx.test(userGuessLatest)){
  //     p.html("Please Guess a 4-Digit number");
  //   } else {
  //       var numberGuess = parseInt(userGuessLatest);
  //       p.html("YAI you followed instructions")
  //   }
  // }
  // $("#outputBox").append(p)
