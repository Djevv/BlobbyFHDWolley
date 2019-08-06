var player1;
var ball1;
var myNetz;

function startGame() {
  player1 = new player(30, 30, "red", 20, 120, 206, 240, 0, 0);
  myNetz = new player(10, 135, "green", 235, 135, 0, 0, 0, 0)
  ball1 = new ball(20, 20, "blue", 50, 100, 480, 250) 
  myGameArea.start();
}

var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
    
    window.addEventListener('keydown', function (e) {
      myGameArea.keys = (myGameArea.keys || []);
      myGameArea.keys[e.keyCode] = true;
    })

    window.addEventListener('keyup', function (e) {
      myGameArea.keys[e.keyCode] = false;
      if (myGameArea.keys[38] == false && player1.jump == true) {
        player1.gravitySpeed = 0.5;
        player1.jump = false;
      }
    })
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

function player(width, height, color, x, y, maxX, maxY, minX, minY) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;    
  this.maxX = maxX;
  this.maxY = maxY;
  this.minX = minX;
  this.minY = minY;
  this.gravity = 0.25;
  this.gravitySpeed = 0;
  this.jump = true;

  this.update = function(){
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }

  this.newPos = function() {
    if ((this.x + this.speedX) >= minX && (this.x + this.speedX) <= maxX) {
      this.x += this.speedX;
    }

    if ((this.y + this.speedY + this.gravitySpeed) >= minY && (this.y + this.speedY + this.gravitySpeed) <= maxY) {
      this.gravitySpeed += this.gravity;
      this.y = this.y + this.speedY + this.gravitySpeed;
    } else {
      this.gravitySpeed = 0;
      this.jump = true;
    }
  }
}

function ball(width, height, color, x, y, maxX, maxY) {
  this.width = width;
  this.height = height
  this.speedX;
  this.speedY;
  this.x = x;
  this.y = y;    
  this.maxX = maxX;
  this.maxY = maxY;
  this.minX = 0;
  this.minY = 0;
  this.gravity = 0.1;
  this.gravitySpeed = 0;

  this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }

  this.newPos = function() {
    if ((this.x + this.speedX) >= this.minX && (this.x + this.speedX) <= this.maxX) {
      this.x += this.speedX;
    }
 
    if ((this.y + this.speedY + this.gravitySpeed) >= this.minY && (this.y + this.speedY + this.gravitySpeed) <= this.maxY) {
      this.gravitySpeed += this.gravity;
      this.y = this.y + this.speedY + this.gravitySpeed;
    } else {
      this.gravitySpeed = 0;
    }
  }

  this.collisionp1 = function(player1) {
    var bLeft = this.x;
    var bRight = this.x + (this.width);
    var bTop = this.y;
    var bBottom = this.y + (this.height);
    var p1Left = player1.x;
    var p1Right = player1.x + (player1.width);
    var p1Top =  player1.y;
    var p1Bottom = player1.y + (player1.height)
    var collision = true;

    if((bBottom < p1Top) ||
    (bTop > p1Bottom) ||
    (bRight < p1Left) ||
    (bLeft > p1Right)) {
      collision = false;
    }
    return collision;
  }

}

function updateGameArea() {
  myGameArea.clear();
  player1.speedX = 0;
  player1.speedY = 0;
  ball1.speedX = 0;
  ball1.speedY = 0;
  if (myGameArea.keys && myGameArea.keys[37]) {player1.speedX = -3;}
  if (myGameArea.keys && myGameArea.keys[39]) {player1.speedX = 3;}
  if (myGameArea.keys && myGameArea.keys[38] && player1.jump == true) {player1.speedY = -8;}

  player1.newPos();
  if (ball1.collisionp1(player1)) {
    ball1.gravitySpeed = 0;
    ball1.speedX += (player1.speedX * 10);
    ball1.speedY += -25;
  };
  ball1.newPos();
  player1.update();
  ball1.update();
  myNetz.update();

  document.getElementById("X").innerHTML = player1.x;
  document.getElementById("Y").innerHTML = player1.y;
}