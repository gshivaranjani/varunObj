var gameState = 0, playerCount;
var database;
var form, player, game;
var allPlayers;
var p1,p2,p3,p4;
var players;


function setup() {
  createCanvas(displayWidth - 20, displayWidth - 30);
  database = firebase.database();
  game = new Game();
  game.getGameState();
  game.start();
  console.log(gameState);
}

function draw() {
  if (playerCount === 4) {
    game.updateGameState(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  } 
}