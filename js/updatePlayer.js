function p1Updater(){
    //For player 1
    player1.speedX = 0;
    player1.speedY = 0;
    if (myGameArea.keys && myGameArea.keys[65]) {player1.speedX = -7 * sca;}
    if (myGameArea.keys && myGameArea.keys[68]) {player1.speedX = 7 * sca;}
    if (myGameArea.keys && myGameArea.keys[87] && player1.jump == true) {player1.speedY = -12 * sca;}
    player1.newPos();
    player1.update();
}
  
function p2Updater() {
//For player 2

    player2.speedX = 0;
    player2.speedY = 0;
    if (myGameArea.keys && myGameArea.keys[37]) {player2.speedX = -7 * sca;}
    if (myGameArea.keys && myGameArea.keys[39]) {player2.speedX = 7 * sca;}
    if (myGameArea.keys && myGameArea.keys[38] && player2.jump == true) {player2.speedY = -12 * sca;}
    player2.newPos();
    player2.update();
}

function p1CollisionTrue(){
    ball1.x = (myGameArea.canvas.width / 4) * 3;
    ball1.y = 280 * sca;

    ball1.firsthit = false;
    scorep2.Score += 1;
    scorep2.text = "Player 2 Score: " + scorep2.Score;

    player1.hits = 0;
    player2.hits = 0;
    //console.log("p1 hits: " + player1.hits);
    //console.log("p2 hits: " + player2.hits);
    randomDonk();
}

function p2CollisionTrue(){
    ball1.x = myGameArea.canvas.width / 4;
    ball1.y = 280 * sca;

    ball1.firsthit = false;
    scorep1.Score += 1;
    scorep1.text = "Player 1 Score: " + scorep1.Score;
    player1.hits = 0;
    player2.hits = 0;
    //console.log("p1 hits: " + player1.hits);
    //console.log("p2 hits: " + player2.hits);
    randomDonk();
}