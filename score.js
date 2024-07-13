// Iteration 8: Making scoreboard functional
const playAgainBtn = document.getElementById("play-again-button");
const scoreBoard = document.getElementById("score-board");

if (playAgainBtn)
  playAgainBtn.onclick = function () {
    window.location.href = "./index.html";
  };
//score and display it on the game over screen
if (scoreBoard) scoreBoard.innerText = localStorage.getItem("score");
