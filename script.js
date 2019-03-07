$(document).ready( function() {
  let wins = 0;
  let losses = 0;
  let display = $("#display");
  $(".button").on("click", function() {
    let choice = this.parentElement.id
    switch(choice){
      case "rock":
        display.removeClass().addClass("alert alert-primary").text("You chose "+ choice)
        break;
      case "paper":
        display.removeClass().addClass("alert alert-primary").text("You chose "+ choice)
        break;
      case "scissors":
        display.removeClass().addClass("alert alert-primary").text("You chose "+ choice)
        break;
    }
    compChoice(choice);
  })
  function compChoice(uChoice) {
    var cChoice = ["rock", "paper", "scissors"][Math.floor((Math.random()*3))]
    game(uChoice, cChoice)
  }
  function game(u, c) {
    switch (u){
      case "rock":
        switch (c) {
          case "rock":
            setTimeout(function(){
              display.removeClass().addClass("alert alert-warning")
              winner("Results: Tie.")
            }, 1500)
            break;
          case "paper":
            setTimeout(function(){
              display.removeClass().addClass("alert alert-danger")
              losses += 1
              $("#loseDisp").text("Losses: " + losses)
              winner("Results: Paper covers Rock. You lose.")
            }, 1500)
            break;
          case "scissors":
            setTimeout(function(){
              display.removeClass().addClass("alert alert-success")
              wins += 1
              $("#winDisp").text("Wins: " + wins)
              winner("Results: Rock smashes scissors. You win!")
            }, 1500)
            break;
        }
        break;
      case "paper":
        switch (c) {
          case "rock":
            setTimeout(function(){
              display.removeClass().addClass("alert alert-success")
              wins += 1;
              $("#winDisp").text("Wins: " + wins)
              winner("Result: Paper covers rock. You win!")
            }, 1500)
            break;
          case "paper":
            setTimeout(function(){
              display.removeClass().addClass("alert alert-warning")
              winner("Result: Tie.")
            }, 1500)
            break;
          case "scissors":
            setTimeout(function(){
              display.removeClass().addClass("alert alert-danger")
              losses += 1
              $("#loseDisp").text("Losses: " + losses)
              winner("Result: Scissors cut paper. You lose.")
            }, 1500)
            break;
        }
        break;
      case "scissors":
        switch (c) {
          case "rock":
            setTimeout(function(){
              display.removeClass().addClass("alert alert-danger")
              losses += 1
              $("#loseDisp").text("Losses: " + losses)
              winner("Result: Rock smashes scissors. You lose.")
            }, 1500)
            break;
          case "paper":
            setTimeout(function(){
              display.removeClass().addClass("alert alert-success")
              wins += 1
              $("#winDisp").text("Wins: " + wins)
              winner("Result: Scissors cut paper. You win!")
            }, 1500)
            break;
          case "scissors":
            setTimeout(function(){
              display.removeClass().addClass("alert alert-warning")
              winner("Result: Tie.")
            }, 1500)
            break;
        }
        break;
    }
  }
  function winner(won) { $("#display").text(won) }
});










