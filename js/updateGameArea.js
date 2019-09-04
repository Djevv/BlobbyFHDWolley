function updateGameArea() {

  //Checking Score and if game has to be stopped
  if(scorep1.Score == 3 || scorep2.Score == 3){
    checkScore();
  } else{

  
  myGameArea.clear();
  
  //For Net + Floor and Background
  bodenp1.update();
  bodenp2.update(); 
  background1.update();
  myNetz.update(); 


  //player + ballMovement each contain the functions .newPos() and .update()
  p1Updater();
  p2Updater();

  ballPointer1.newPos();
  ballPointer1.update();


  //Check collision with oponents floor 
  if(ball1.collisionp1(bodenp1) || player1.hits == 4){p1CollisionTrue();};
  if(ball1.collisionp1(bodenp2) || player2.hits == 4){p2CollisionTrue();};

  ball1Updater();

  scorep1.update();
  scorep2.update();

  if(scorep1 == 3 || scorep2 == 3){myGameArea.stop();}
  }
}