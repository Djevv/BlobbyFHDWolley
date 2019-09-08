function updateGameArea() {
  //Checking Score and if game has to be stopped
  if(scorep1.Score == 12 || scorep2.Score == 12){
    checkScore();
  } else{

  
  myGameArea.clear();
  
  //For Net + Floor and Background
  floorp1.update();
  floorp2.update(); 
  background1.update();
  myNetz.update(); 


  //player + ballMovement each contain the functions .newPos() and .update()
  p1Updater();
  p2Updater();

  ballPointer1.newPos();
  ballPointer1.update();


  //Check collision with oponents floor 
  if(ball1.collisionp1(floorp1)){p1FloorTrue();};
  if(ball1.collisionp1(floorp2)){p2FloorTrue();};

  updateBall();

  scorep1.update();
  scorep2.update();

  if(myGameArea.keys[27]) {
    myGameArea.stop();
    myGameArea.start();
    myGameArea.interval = setInterval(updateGamemenu, 1);
    menustarted = true;
    gamestarted = false;
    gameMusic.stop();
    resize();
  }

  }
}