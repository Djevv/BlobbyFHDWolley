function updateGameArea() {
  myGameArea.clear();

  
  
  //Für Netz + Boden und Hintergrundbild
  bodenp1.update();
  bodenp2.update(); 
  background1.update();
  myNetz.update(); 


  //player + ballMovement enthalten jeweils die Funktion .newPos() und .update()
  p1Updater();

  p2Updater();

  ballPointer1.newPos();
  ballPointer1.update();

  if(ball1.collisionp1(bodenp1)){ 
    scorep2.text += 1;
    ball1.x = (myGameArea.canvas.width / 4) * 3;
    ball1.y = 280;

    ball1.firsthit = false;
    scorep2.Score += 1;
    console.log("Player 2 Score: " + scorep2.Score);
  };

  if(ball1.collisionp1(bodenp2)){
    scorep1.text += 1;
    ball1.x = myGameArea.canvas.width / 4;
    ball1.y = 280;

    ball1.firsthit = false;
    scorep1.Score += 1;
    console.log("Player 1 Score: " + scorep1.Score);
  };

  ball1Updater();

  scorep1.update;
  scorep2.update;

}

function p1Updater(){
  //Für Spieler 1
  player1.speedX = 0;
  player1.speedY = 0;
  if (myGameArea.keys && myGameArea.keys[65]) {player1.speedX = -7;}
  if (myGameArea.keys && myGameArea.keys[68]) {player1.speedX = 7;}
  if (myGameArea.keys && myGameArea.keys[87] && player1.jump == true) {player1.speedY = -12;}
  player1.newPos();
  player1.update();
}

function p2Updater() {
  //Für Spieler 2

  player2.speedX = 0;
  player2.speedY = 0;
  if (myGameArea.keys && myGameArea.keys[37]) {player2.speedX = -7;}
  if (myGameArea.keys && myGameArea.keys[39]) {player2.speedX = 7;}
  if (myGameArea.keys && myGameArea.keys[38] && player2.jump == true) {player2.speedY = -12;}
  player2.newPos();
  player2.update();
}

function ball1Updater() {
    //Für Ball1
    ball1.speedY = 0;

    //Testing if ball collides with player1 and calculating the new speed and angle for the ball if true
    if (ball1.collisionp1(player1)) {
    ball1.firsthit = true;
    
    ball1.gravitySpeed = (4) * (((ball1.y + (ball1.height / 2)) - (player1.y + (player1.height / 2))) / 25);
    ball1.speedX = (((ball1.x + (ball1.width / 2)) - (player1.x + (player1.width / 2))) / 25) * 5
    ball1.speedY +=  -10;
    };

    //Testing if ball collides with player2 and calculating the new speed and angle for the ball if true
    if (ball1.collisionp1(player2)) {
    ball1.firsthit = true;

    ball1.gravitySpeed = (4) * (((ball1.y + (ball1.height / 2)) - (player2.y + (player2.height / 2))) / 25);
    ball1.speedX = (((ball1.x + (ball1.width / 2)) - (player2.x + (player2.width / 2))) / 25) * 5
    ball1.speedY +=  -10;
    };

    //Testing if ball collides with net
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
  
    ball1.newPos();
    ball1.update();
}