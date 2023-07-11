"use strict";

const player1Box = document.querySelector(".player-1-box");
const player1 = document.querySelector(".player-1");
const player1ScoreDOM = document.querySelector(".player-1__score");
const player1TempScoreDOM = document.querySelector(".current-score-1");

const player2Box = document.querySelector(".player-2-box");
const player2 = document.querySelector(".player-2");
const player2ScoreDOM = document.querySelector(".player-2__score");
const player2TempScoreDOM = document.querySelector(".current-score-2");

let player1Score = 0;
let player1TempScore = 0;

let player2Score = 0;
let player2TempScore = 0;

const rollDiceBtn = document.querySelector(".roll-dice-btn");

rollDiceBtn.addEventListener("click", function () {
  if (player1Score <= 99 && player2Score <= 99) {
    if (player1Box.classList.contains("active")) {
      const randomScore = Math.trunc(Math.random() * 6 + 1);

      for (let i = 1; i <= 6; i++) {
        document.querySelector(`.dice-${i}`).classList.add("hide");
      }

      if (randomScore === 1) {
        document.querySelector(`.dice-${randomScore}`).classList.remove("hide");
        player1Box.classList.remove("active");
        player2Box.classList.add("active");
        player1TempScore = 0;
        player1TempScoreDOM.textContent = 0;
        return;
      }

      document.querySelector(`.dice-${randomScore}`).classList.remove("hide");
      player1TempScore += randomScore;
      player1TempScoreDOM.textContent = player1TempScore;
    } else {
      const randomScore = Math.trunc(Math.random() * 6 + 1);

      for (let i = 1; i <= 6; i++) {
        document.querySelector(`.dice-${i}`).classList.add("hide");
      }

      if (randomScore === 1) {
        document.querySelector(`.dice-${randomScore}`).classList.remove("hide");
        player2Box.classList.remove("active");
        player1Box.classList.add("active");
        player2TempScore = 0;
        player2TempScoreDOM.textContent = 0;
        return;
      }

      document.querySelector(`.dice-${randomScore}`).classList.remove("hide");
      player2TempScore += randomScore;
      player2TempScoreDOM.textContent = player2TempScore;
    }
  }
});

const holdBtn = document.querySelector(".hold-btn");

holdBtn.addEventListener("click", function () {
  if (player1TempScore > 0 || player2TempScore > 0) {
    if (player1Box.classList.contains("active")) {
      player1Score += player1TempScore;
      player1ScoreDOM.textContent = player1Score;
      player1Box.classList.remove("active");
      player2Box.classList.add("active");
      player1TempScore = 0;
      player1TempScoreDOM.textContent = 0;
    } else {
      player2Score += player2TempScore;
      player2ScoreDOM.textContent = player2Score;
      player2Box.classList.remove("active");
      player1Box.classList.add("active");
      player2TempScore = 0;
      player2TempScoreDOM.textContent = 0;
    }

    if (player1Score > 99) {
      player1Box.classList.add("winner");
      player1.classList.add("winner-player");
    } else if (player2Score > 99) {
      player2Box.classList.add("winner");
      player2.classList.add("winner-player");
    }
  }
});

const newGameBtn = document.querySelector(".new-game-btn");

newGameBtn.addEventListener("click", function () {
  player1Score = 0;
  player1TempScore = 0;

  player2Score = 0;
  player2TempScore = 0;

  player1ScoreDOM.textContent = 0;
  player1TempScoreDOM.textContent = 0;

  player2ScoreDOM.textContent = 0;
  player2TempScoreDOM.textContent = 0;

  for (let i = 1; i <= 6; i++) {
    document.querySelector(`.dice-${i}`).classList.add("hide");
  }

  player1Box.classList.remove("winner");
  player1.classList.remove("winner-player");
  player2Box.classList.remove("winner");
  player2.classList.remove("winner-player");
});
