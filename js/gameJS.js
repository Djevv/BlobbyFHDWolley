var player1;
var player2;
var ball1;
var myNetz;
var bodenp1;
var bodenp2;
var ballPointer1;
var scorep1;
var scorep2;
var mouseX;
var mouseY;

function startGame() {
  background1 = new image("assets/images/backgrounds/strand2.png");

  player1 = new player(60, 120, "assets/images/players/player1_walk1.png", 40, 415, 412, 420, 0, 0);
  player2 = new player(60, 120, "assets/images/players/player2_walk1.png", 880, 415, 900, 420, 490, 0);

  myNetz = new player(20, 270, "assets/images/props/netz1.png", 470, 270, 0, 0, 0, 0);
  ball1 = new ball(40, 40, "assets/images/props/volleyball1.png", (player1.x + 100), 280, 920, 500);
  ballPointer1 = new ballPointer(40, 10, "yellow", 5);

  bodenp1 = new boden(480, 1, "white", 0, 538);
  bodenp2 = new boden(480, 1, "white", 480, 538);

  scorep1 = new score(40, 40, 20, 60, "assets/images/backgrounds/p1win.png");
  scorep2 = new score(40, 40, 900, 60, "assets/images/backgrounds/p2win.png");

  specialDonk = new sound("assets/sounds/donk1.mp3");

  gameMusic = new sound("assets/sounds/fhd-ravey.mp3");

  myGameArea.start();
  myGameArea.interval = setInterval(updateGameArea, 20);

  gamestarted = true;

  gameMusic.play();
  resize();

}

var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 960;
    this.canvas.height = 540;
    //resize();
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    

    //Eventlisteners for moving players 
    window.addEventListener('keydown', function (e) {
      myGameArea.keys = (myGameArea.keys || []);
      myGameArea.keys[e.keyCode] = true;
    })

    window.addEventListener('keyup', function (e) {
      myGameArea.keys[e.keyCode] = false;
      if (myGameArea.keys[87] == false && player1.jump == true) {
        player1.gravitySpeed = 0.5;
        player1.jump = false;
        //player1.image.src = "assets/images/players/player1_walk1.png"
      }
      if (myGameArea.keys[38] == false && player2.jump == true) {
        player2.gravitySpeed = 0.5;
        player2.jump = false;
        //player2.image.src = "assets/images/players/player2_walk1.png"
      }
    })

    window.addEventListener('mousedown', function (e) {
      myGameArea.x = e.pageX;
      myGameArea.y = e.pageY;
    })

    window.addEventListener('mouseup', function (e) {
      myGameArea.x = false;
      myGameArea.y = false;
    })

    
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop : function() {
    clearInterval(this.interval);
  }
}



/*
window.addEventListener('Escape', function keypress (e) {
  if(e.key == "Escape") {
    console.log("escaped!");
    myGameArea.stop();
    myGameArea.start();
    myGameArea.interval = setInterval(updateGamemenu, 1);
    menustarted = true;
    tutorialstarted = false;
    resize();
    console.log("escaped!");
    }
})
*/