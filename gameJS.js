var player1;
var player2;
var ball1;
var myNetz;
var bodenp1;
var bodenp2;
var scorep1;
var scorep2;

function startGame() {
  player1 = new player(30, 30, "red", 20, 120, 206, 240, 0, 0);
  player2 = new player(30, 30, "blue", 440, 120, 450, 240, 245, 0);

  myNetz = new player(10, 135, "green", 235, 135, 0, 0, 0, 0);
  ball1 = new ball(20, 20, "volleyball.png", 230, 50, 460, 250); 

  bodenp1 = new boden(240, 1, "white", 0, 269);
  bodenp2 = new boden(240, 1, "white", 240, 269);

  scorep1 = new score("30px", "Consolas", "black", 40, 40, "text");
  scorep2 = new score("30px", "Consolas", "black", 280, 40, "text");

  myGameArea.start();
}

var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 480;
    this.canvas.height = 270;
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
