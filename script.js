$(document).ready( function() {
  $(".button").on("click", function() {
    let choice = this.parentElement.id
    compChoice(choice);
  })
  function compChoice(uChoice) {
    var compChoices = ["rock", "paper", "scissors"]
    var cChoice = compChoices[Math.floor((Math.random()*compChoices.length))]
    game(uChoice, cChoice)
  }
  function game(u, c) {
    switch (u){
      case "rock":
        switch (c) {
          case "rock":
            winner("Results: Tie.")
            break;
          case "paper":
            winner("Results: You lose.")
            break;
          case "scissors":
            winner("Results: You win!")
            break;
        }
        break;
      case "paper":
        switch (c) {
          case "rock":
            winner("Result: You win!")
            break;
          case "paper":
            winner("Result: Tie.")
            break;
          case "scissors":
            winner("Result: You lose.")
            break;
        }
        break;
      case "scissors":
        switch (c) {
          case "rock":
            winner("Result: You lose.")
            break;
          case "paper":
            winner("Result: You win!")
            break;
          case "scissors":
            winner("Result: Tie.")
            break;
        }
        break;
    }
  }
  function winner(won) {
    $("#display").text(won)
  }
});

