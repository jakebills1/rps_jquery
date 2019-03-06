$(document).ready( function() {
  let wins = 0;
  let losses = 0;
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
            losses += 1
            $("#loseDisp").text("Losses: " + losses)
            winner("Results: You lose.")
            break;
          case "scissors":
            wins += 1
            $("#winDisp").text("Wins: " + wins)
            winner("Results: You win!")
            break;
        }
        break;
      case "paper":
        switch (c) {
          case "rock":
            wins += 1;
            $("#winDisp").text("Wins: " + wins)
            winner("Result: You win!")
            break;
          case "paper":
            winner("Result: Tie.")
            break;
          case "scissors":
            losses += 1
            $("#loseDisp").text("Losses: " + losses)
            winner("Result: You lose.")
            break;
        }
        break;
      case "scissors":
        switch (c) {
          case "rock":
            losses += 1
            $("#loseDisp").text("Losses: " + losses)
            winner("Result: You lose.")
            break;
          case "paper":
            wins += 1
            $("#winDisp").text("Wins: " + wins)
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

