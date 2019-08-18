var player1;
var player2;
var ball1;
var myNetz;
var bodenp1;
var bodenp2;
var ballPointer1;
var scorep1;

function startGame() {
  background1 = new image("strand1.png");

  player1 = new player(60, 120, "player1.png", 40, 240, 412, 420, 0, 0);
  player2 = new player(60, 120, "player2.png", 880, 240, 900, 420, 490, 0);

  myNetz = new player(20, 270, "netz.png", 470, 270, 0, 0, 0, 0);
  ball1 = new ball(40, 40, "volleyball.png", player1.x, 100, 920, 500);
  ballPointer1 = new ballPointer(40, 20, "yellow", 5);

  bodenp1 = new boden(480, 1, "white", 0, 538);
  bodenp2 = new boden(480, 1, "white", 480, 538);

  scorep1 = new score(500, 100, "black", 60, 100);

  myGameArea.start();
}

var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.relation = ((window.innerWidth)*0.85) / 480;
    this.canvas.width = 960 //* this.relation;
    //this.canvas.width = window.screen.width * window.devicePixelRatio;
    this.canvas.height = 540 //* this.relation;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);   // Game Loop mit 20fps
    
    window.addEventListener('keydown', function (e) {
      myGameArea.keys = (myGameArea.keys || []);
      myGameArea.keys[e.keyCode] = true;
    })

    window.addEventListener('keyup', function (e) {
      myGameArea.keys[e.keyCode] = false;
      if (myGameArea.keys[87] == false && player1.jump == true) {
        player1.gravitySpeed = 0.5;
        player1.jump = false;
      }
      if (myGameArea.keys[38] == false && player2.jump == true) {
        player2.gravitySpeed = 0.5;
        player2.jump = false;
      }
    })
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}