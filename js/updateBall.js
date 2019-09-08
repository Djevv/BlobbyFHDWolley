function updateBall() {
  ball1.speedY = 0;

  //ball1 only spins when it has been hit for the first time
  if(ball1.firsthit){ball1.angle += 10 * Math.PI / 180;}; 

  //Testing if ball collides with player1 and calculating the new speed and angle for the ball if true
  if (ball1.collisionp1(player1)) {
  ball1.firsthit = true;
  //
  ball1.gravitySpeed = (12 * sca) * (((ball1.y + (ball1.height / 2)) - (player1.y + (player1.height / 2))) / ((player1.height + ball1.height) / 2));
  ball1.speedX = (((ball1.x + (ball1.width / 2)) - (player1.x + (player1.width / 2))) / ((player1.width + ball1.width) / 2)) * (10 * sca);
  //ball1.speedY +=  -10;

  randomDonk();
  };


  //Testing if ball collides with player2 and calculating the new speed and angle for the ball if true
  if (ball1.collisionp1(player2)) {
  ball1.firsthit = true;
  ball1.gravitySpeed = (12 * sca) * (((ball1.y + (ball1.height / 2)) - (player2.y + (player2.height / 2))) / ((player2.height + ball1.height) / 2));
  ball1.speedX = (((ball1.x + (ball1.width / 2)) - (player2.x + (player2.width / 2))) / ((player2.width + ball1.width) / 2)) * (10 * sca);
  //ball1.speedY +=  -10;

  randomDonk();
  };


  //Testing if ball collides with net
  if (ball1.collisionp1(myNetz)) {
    if ((ball1.y + (ball1.height / 2)) <= myNetz.y){
      ball1.gravitySpeed *= (-1);
    }
    else{
      ball1.speedX *= (-1);
    }
    
  };

  ball1.newPos();
  ball1.update();
}