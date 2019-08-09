var player1;
var ball1;
var myNetz;


function startGame() {
  player1 = new player(30, 30, "red", 20, 120, 206, 240, 0, 0);
  player2 = new player(30, 30, "red", 440, 120, 450, 240, 245, 0);
  myNetz = new player(10, 135, "green", 235, 135, 0, 0, 0, 0);
  ball1 = new ball(20, 20, "blue", 50, 100, 460, 250); 
  bodenp1 = new boden(240, 1, "yellow", 0, 269);
  bodenp2 = new boden(240, 1, "yellow", 240, 269);
  myGameArea.start();
}



function updateGameArea() {
  myGameArea.clear();

  playerMovement();

  ballMovement();

  //Für Netz + Boden
  bodenp1.update();
  bodenp2.update();
  myNetz.update();  

  document.getElementById("X").innerHTML = player1.x;
  document.getElementById("Y").innerHTML = player1.y;
}