
// TODO: make sure that mysteryNum is always aa 4-digit number...
// var mysteryNum = Math.floor(Math.random()*10000+1);
var mysteryNum = 1234;
var guessCounter = 0;

// Create Line Graph
//var Chart = require('chart.js');
var ctx = $("#myChart");
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        data: [0],
        label: "Right Number in Right Location",
        borderColor: "Green",
        fill: false
      }, {
        data: [0],
        label: "Right Number in Wrong Location",
        borderColor: "Yellow",
        fill: false
      }, {
        data: [0],
        label: "Wrong Number",
        borderColor: "Red",
        fill: false
        }
      ]
    },
    options: {
      scales: {
            yAxes: [{
                override: {
                    stepWidth: 1,
                    start: 0,
                    steps: 1,
                }
            }]
        }
    }
});

function addData(chart, rnr,rnw,counter) {
  chart.data.datasets[0].push({
    label: counter,
    data: rnr
  })
  chart.data.datasets[1].push({
    data: rnw
  })
  chart.data.datasets[2].push({
    data: (4-rnr-rnw)
  })
  myLineChart.update();
}

// VALIDATE NUMBER
function convertToSingleNum(e) {

  guessCounter++;

  var userGuessDigits = [
    $("#userGuess1").val(),
    $("#userGuess2").val(),
    $("#userGuess3").val(),
    $("#userGuess4").val()
  ]
  var answerDigits = mysteryNum.toString().split('');

// Check if digit is right number in right spot
// Create array of all digits in the right spot
  var rnr = 0;
  var removeIndices = userGuessDigits.map(function(digit, i){
    if (digit == answerDigits[i]) {
      rnr++;
      return digit;
    }
  })

// Remove nulls from array of all digits that are right
  var cleanedRemoveIndices = removeIndices.filter(function(digit){
    return digit != null;
  });
// Remove all correct digits from the answer and guess variables
  for(var i = 0; i < cleanedRemoveIndices.length; i++){
    var indexSpot = userGuessDigits.indexOf(removeIndices[i]);
    userGuessDigits.splice(indexSpot, 1);
    answerDigits.splice(indexSpot, 1);
  };

// Check if any numbers are right but in the wrong spot
// If theres a match, remove value from answers Digit
var rnw = 0;
for(var i = 0; i < userGuessDigits.length; i++){
  if(answerDigits.includes(userGuessDigits[i])){
    rnw++;
    var matchedNum = (userGuessDigits[i]);
    var removeIndicesRNW = answerDigits.indexOf(matchedNum);
    answerDigits.splice(removeIndicesRNW,1);
    console.log(answerDigits);
  }
}

console.log("Right Number in Right Position: " + rnr);
console.log("Right Number in Wrong Position: "+ rnw);
console.log("How many times have you guessed?: " + guessCounter);

$("#userGuess1").val(""),
$("#userGuess2").val(""),
$("#userGuess3").val(""),
$("#userGuess4").val("");

// Create Right number right position Graph

// Create <tr>
// Create dot inside <tr>
// Append to rowTwoRight
// Create blank <td> for all others
// connect to previous dot

// Create Right number wrong position Graph

// create dat
// Append dot to last-child tr
// connect to previous dot

addData(myLineChart, rnr,rnw,guessCounter);

return rnr && rnw;


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


  // var rnr = userGuessDigits.reduce(function(counter, digit, i){
  //   if (digit == answerDigits[i]) {
  //     counter++;
  //     // remove this digit from both arrays...
  //     userGuessDigits.splice(i, 1);
  //     answerDigits.splice(i, 1);
  //   }
  //   return counter;
  // }, 0);


  //
  //
  // var userGuessNum = "";
  //
  // for (var i = 0; i < userGuessDigit.length; i++){
  //   userGuessNum = userGuessNum + userGuessDigit[i]
  // }
  //
  // var answer = mysteryNum.toString();
  // var tempAnswer = answer;
  // var rightGuessCount = 0;
  // var closeGuessCount = 0;
  //
  // for(var i = 0; i <userGuessNum.length; i++){
  //   if (tempAnswer.charAt(i) == userGuessNum.charAt(i)){
  //     rightGuessCount++;
  //     tempAnswer.splice(i, 1);
  //     userGuessNum.splice(i,1);
  //   }
  // for (var i = 0; i < userGuessNum.Length; i++){
  //   if (userGuessNum.charAt(i)) ==
  // }
  //
  // }


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
