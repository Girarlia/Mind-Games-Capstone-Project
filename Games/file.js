
// TODO: make sure that mysteryNum is always aa 4-digit number...
var mysteryNum = Math.floor(Math.random()*10000+1);
// var mysteryNum = 1234;
var guessCounter = 0;

// Create Line Graph
//var Chart = require('chart.js');
var ctx = $("#myChart");
var myLineChart = new Chart(ctx, {
    type: 'line',
    legend:{
      fontSize: 50,
      },
    data: {
      labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
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
      },
      // {
      //   data: [0],
      //   label: "Wrong Number",
      //   borderColor: "Red",
      //   fill: false
      //   }
      ]
    },
    options: {
      legend:{
        display: true,
        labels:
          {fontSize:22,
          fontweight: "bold"}},
      scales: {
        xAxes: [{
          ticks: {
                      fontSize: 40
                  }
        }],
        yAxes: [{
          ticks: {
                      fontSize: 40
                  },
          scaleStartValue : 0
        }],

    }
        }
        }
    );

function addData(chart, rnr,rnw, wrongNum, counter) {

    // chart.data.labels.push(counter);
    chart.data.datasets[0].data.push(rnr);
    chart.data.datasets[1].data.push(rnw)
    // chart.data.datasets[2].data.push(wrongNum)
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

  console.log(userGuessDigits);
  // console.log(answerDigits);


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
var wrongNum = 4-rnr-rnw;

console.log("Right Number in Right Position: " + rnr);
console.log("Right Number in Wrong Position: "+ rnw);
// console.log("Wrong Numner and Wrong Position: "+ wrongNum);
console.log("Guess Counter: " + guessCounter);



$("#userGuess1").val(""),
$("#userGuess2").val(""),
$("#userGuess3").val(""),
$("#userGuess4").val("");

addData(myLineChart, rnr,rnw,wrongNum, guessCounter);

if (rnr == 4){
  alert( "YOU WIN!!!");
}

return rnr && rnw;

}


var userGuess = $("#userGuessButton").on("click", convertToSingleNum);
