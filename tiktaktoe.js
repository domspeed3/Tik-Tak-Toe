window.addEventListener("DOMContentLoaded", () => {
let audio = document.getElementById('audio');
audio.volume = 0.2;

const cellElement = document.querySelectorAll(".cell");
const resetElement = document.querySelector("#reset");
const displayPlayerElement = document.querySelector(".display-player");
const titleElement = document.querySelector("#title");
const announcerElement = document.querySelector(".announcer");

let currentPlayer = "X";

const player1Won = "PLAYER 1 WON"
const player2Won = "PLAYER 2 WON"
const draw = "DRAW"


const winningConditions = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6],

]

let gameActive = true;

cellElement.forEach(cell => {
 cell.addEventListener("click", () => {
      if (cell.textContent === "" && gameActive) {
        cell.textContent = currentPlayer;
        checkGameStatus();
        }
     });
   });


   function checkGameStatus() {
      if (checkWinner()) {
         announcerElement.textContent = currentPlayer + "WON"
         gameActive = false;
        } else if (checkDraw()) {
         announcerElement.textContent = "Draw";
         gameActive = false;
        } else {
         currentPlayer = currentPlayer === "X" ? "0": "X";
         displayPlayerElement.textContent = currentPlayer;
        }
   }
       


function checkWinner() {
   for (let i = 0; i < winningConditions.length; i++) {
      const winCondition = winningConditions[i];
      let a = cellElement[winCondition[0]].textContent;
      let b = cellElement[winCondition[1]].textContent;
      let c = cellElement[winCondition[2]].textContent;
      
      if (a === "" || b === "" || c === "") {
         continue;
      }
      if (a === b && b === c) {
         return true;
      }
   }
      return false;
   }
   


   function checkDraw() {
      return [...cellElement].every(cell => cell.textContent !== "");
  }



  resetElement.addEventListener("click", () => {
   cellElement.forEach(cell => cell.textContent = "");
   gameActive = true;
   currentPlayer = "X";
   announcerElement.textContent = "";
   displayPlayerElement.textContent = currentPlayer;
});


});