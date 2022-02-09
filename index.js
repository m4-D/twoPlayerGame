// Selectors for players event listener
const playerOne = document.getElementById("one");
const playerTwo = document.getElementById("two");

// Selectors for players health
const playerOneHealth = document.getElementById("health-one");
const playerTwoHealth = document.getElementById("health-two");

// Selectors for players power used
const powerOne = document.getElementById("powerOne");
const powerTwo = document.getElementById("powerTwo");

// Players starting health
let healthPTwo = 100;
let healthPOne = 100;

// Selectors for wins
const wins = document.getElementById("wins");
const verdict = document.getElementById("verdict");

// Winner counter
let winPlayerOne = 0;
let winPlayertwo = 0;

// Selector for starting the game
const gameStart = document.getElementById("start-game");
let gameState = false;

// Set the gamestate to playable
gameStart.addEventListener("click", function (e) {
  gameState = !gameState;

  healthPOne = 100;
  healthPTwo = 100;

  powerOne.innerHTML = "";
  powerTwo.innerHTML = "";

  playerOneHealth.innerHTML = "P1 (100)";
  playerTwoHealth.innerHTML = "P2 (100)";
});

// Powers that can be used
const powers = [
  "Pistol",
  "Shotgun",
  "Assault Rifle",
  "Rocket Launcher",
  "Napalm",
];

// Player 1 Operation
playerOne.addEventListener("click", function (e) {
  e.preventDefault();

  //   Gaurd Clause
  if (!gameState) return;

  //   Generate random Power
  const randomPow = Math.ceil(Math.random() * 5);
  healthPTwo = healthPTwo - randomPow * 4;

  //   Check for the win condition
  if (healthPTwo <= 0) {
    gameState = !gameState;
    playerTwoHealth.innerHTML = `P2 (0)`;
    winPlayerOne += 1;
    wins.innerHTML = `Player 1 : Win - ${winPlayerOne}<br/>Player 2 : Win - ${winPlayertwo}`;
    checkWinner();
  } else {
    //   Decrease Health of the opponent by power
    playerTwoHealth.innerHTML = `P2 (${healthPTwo})`;
    const powerChar = `Weapon Used -> ${powers[randomPow - 1]}`;
    powerOne.innerHTML = powerChar;
  }
});

// Player 2 Operation
playerTwo.addEventListener("click", function (e) {
  e.preventDefault();

  //   Gaurd Clause
  if (!gameState) return;

  //   Generate random Power
  const randomPow = Math.ceil(Math.random() * 5);
  healthPOne = healthPOne - randomPow * 4;

  //   Check for the win condition
  if (healthPOne <= 0) {
    gameState = !gameState;
    playerOneHealth.innerHTML = `P1 (0)`;
    winPlayertwo += 1;
    wins.innerHTML = `Player 1 : Win - ${winPlayerOne}<br/>Player 2 : Win - ${winPlayertwo}`;
    checkWinner();
  } else {
    //   Decrease Health of the opponent by power
    playerOneHealth.innerHTML = `P1 (${healthPOne})`;
    const powerChar = `Weapon Used -> ${powers[randomPow - 1]}`;
    powerTwo.innerHTML = powerChar;
  }
});

function checkWinner() {
  if (winPlayerOne + winPlayertwo === 5) {
    gameState = false;

    healthPOne = 100;
    healthPTwo = 100;

    powerOne.innerHTML = "";
    powerTwo.innerHTML = "";

    playerOneHealth.innerHTML = "P1 (100)";
    playerTwoHealth.innerHTML = "P2 (100)";

    verdict.innerHTML = `Player ${
      winPlayerOne > winPlayertwo ? "1" : "2"
    } has won the match! 🎊🎉`;
  } else return;
}
