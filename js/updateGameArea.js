function updateGameArea() {

  if(scorep1.Score == 3 || scorep2.Score == 3){
    myGameArea.stop();

    if(scorep1.Score == 3){
    ctx = myGameArea.context;
        ctx.font = "20px" + " " + "Consolas";
        ctx.fillStyle = "black";
        ctx.fillText("Player 1 hat gewonnen!", 450, 200);
    }
    if(scorep2.Score == 3){
      ctx = myGameArea.context;
          ctx.font = "20px" + " " + "Consolas";
          ctx.fillStyle = "black";
          ctx.fillText("Player 2 hat gewonnen!", 450, 200);
      }
    setTimeout(function(){ 
      	myGameArea.start();
        myGameArea.interval = setInterval(updateGamemenu, 20);
    }, 5000);
   } else{

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

  if(ball1.collisionp1(bodenp1) || player1.hits == 4){ 
    //scorep2.text += 1;
    ball1.x = (myGameArea.canvas.width / 4) * 3;
    ball1.y = 280;

    ball1.firsthit = false;
    scorep2.Score += 1;
    scorep2.text = "Player 2 Score: " + scorep2.Score;
    //console.log(scorep2.text);
    player1.hits = 0;
    player2.hits = 0;
    console.log(player1.hits);
    console.log(player2.hits);
  };

  if(ball1.collisionp1(bodenp2) || player2.hits == 4){
    //scorep1.text += 1;
    ball1.x = myGameArea.canvas.width / 4;
    ball1.y = 280;

    ball1.firsthit = false;
    scorep1.Score += 1;
    scorep1.text = "Player 1 Score: " + scorep1.Score;
    //console.log("Player 1 Score: " + scorep1.Score);
    player1.hits = 0;
    player2.hits = 0;
    console.log(player1.hits);
    console.log(player2.hits);
  };

  ball1Updater();

  scorep1.update();
  scorep2.update();

   if(scorep1 == 3 || scorep2 == 3){
    myGameArea.stop();
   }
  }
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
    ball1.gravitySpeed = (12) * (((ball1.y + (ball1.height / 2)) - (player1.y + (player1.height / 2))) / ((player1.height + ball1.height) / 2));
    ball1.speedX = (((ball1.x + (ball1.width / 2)) - (player1.x + (player1.width / 2))) / ((player1.width + ball1.width) / 2)) * 10;
    ball1.speedY +=  -10;
    
    player1.hits += 1;
    player2.hits = 0;
    console.log(player1.hits);
    console.log(player2.hits);
    };

    //Testing if ball collides with player2 and calculating the new speed and angle for the ball if true
    if (ball1.collisionp1(player2)) {
    ball1.firsthit = true;
    ball1.gravitySpeed = (12) * (((ball1.y + (ball1.height / 2)) - (player2.y + (player2.height / 2))) / ((player2.height + ball1.height) / 2));
    ball1.speedX = (((ball1.x + (ball1.width / 2)) - (player2.x + (player2.width / 2))) / ((player2.width + ball1.width) / 2)) * 10;
    ball1.speedY +=  -10;

        player2.hits += 1;
    player1.hits = 0;
    console.log(player1.hits);
    console.log(player2.hits);
    };

    //Testing if ball collides with net
    if (ball1.collisionp1(myNetz)) {
      if ((ball1.y + (ball1.height / 2)) <= myNetz.y){
        ball1.gravitySpeed *= (-1);
      }
    //ball1.gravitySpeed = (-5) + ((Math.abs(((ball1.x + (ball1.width / 2)) - (myNetz.x + (myNetz.width / 2))) / 25)) * (2));
      else{
        ball1.speedX *= (-1);
      }
      
    //ball1.speedY +=  -10;
    };
  
    ball1.newPos();
    ball1.update();
}