function checkGuess(e) {
  var userGuessLatest = $("#userGuess").val();
  var p = $("<p></p>")

  if(userGuessLatest.length < 1){
    p.html("Please Guess a Digit");
    // $("#outputBox").append("<p> Please Guess a Digit <p>");
  }

  else if (userGuessLatest.length > 4){
    p.html("Please Guess a 4-Digit number");
  }

  else {
    var rx = new RegExp("^\D")
    if (rx.test(userGuessLatest)){
      p.html("Please Guess a 4-Digit number");
    } else {
        var numberGuess = parseInt(userGuessLatest);
        p.html("YAI you followed instructions")
    }
  }
  $("#outputBox").append(p)
}
$("#userGuessButton").on("click", checkGuess);
