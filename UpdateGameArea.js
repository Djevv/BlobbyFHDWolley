function updateGameArea() {
  myGameArea.clear();

  //Für Netz + Boden
  bodenp1.update();
  bodenp2.update();
  myNetz.update(); 

  //player + ballMovement enthalten jeweils die Funktion .newPos() und .update()
  //Für Spieler 1

  player1.speedX = 0;
  player1.speedY = 0;
  if (myGameArea.keys && myGameArea.keys[65]) {player1.speedX = -4;}
  if (myGameArea.keys && myGameArea.keys[68]) {player1.speedX = 4;}
  if (myGameArea.keys && myGameArea.keys[87] && player1.jump == true) {player1.speedY = -9;}
  player1.newPos();
  player1.update();


  //Für Spieler 2

  player2.speedX = 0;
  player2.speedY = 0;
  if (myGameArea.keys && myGameArea.keys[37]) {player2.speedX = -4;}
  if (myGameArea.keys && myGameArea.keys[39]) {player2.speedX = 4;}
  if (myGameArea.keys && myGameArea.keys[38] && player2.jump == true) {player2.speedY = -9;}
  player2.newPos();
  player2.update();


  //Für Ball1
  ball1.speedY = 0;
  if (ball1.collisionp1(player1)) {
  ball1.gravitySpeed = (5) * (((ball1.y + (ball1.height / 2)) - (player1.y + (player1.height / 2))) / 25);
  ball1.speedX = (((ball1.x + (ball1.width / 2)) - (player1.x + (player1.width / 2))) / 25) * 5
  ball1.speedY +=  -10;
  };
  if (ball1.collisionp1(player2)) {
  ball1.gravitySpeed = (5) * (((ball1.y + (ball1.height / 2)) - (player2.y + (player2.height / 2))) / 25);
  ball1.speedX = (((ball1.x + (ball1.width / 2)) - (player2.x + (player2.width / 2))) / 25) * 5
  ball1.speedY +=  -10;
  };
  if (ball1.collisionp1(myNetz)) {
    if ((ball1.y + (ball1.height / 2)) <= myNetz.y){
      ball1.gravitySpeed += (-1);
    }
  //ball1.gravitySpeed = (-5) + ((Math.abs(((ball1.x + (ball1.width / 2)) - (myNetz.x + (myNetz.width / 2))) / 25)) * (2));
    else{
      ball1.speedX = (((ball1.x + (ball1.width / 2)) - (myNetz.x + (myNetz.width / 2))) / 25) * 5
    }

  //ball1.speedY +=  -10;
  };
  
  if(ball1.collisionp1(bodenp1)){ 
    scorep2.text += 1;
    ball1.x = 440;
    ball1.y = 50;

  };

  if(ball1.collisionp1(bodenp2)){
    scorep1.text += 1;
    ball1.x = 20;
    ball1.y = 50;
  };

  ball1.newPos();
  ball1.update();

  scorep1.update;
  scorep2.update;

  document.getElementById("X").innerHTML = player1.x;
  document.getElementById("Y").innerHTML = player1.y;
}