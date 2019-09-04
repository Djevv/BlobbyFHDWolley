var startbutton;

function startmenu(){
  myGameArea.start();
  myGameArea.interval = setInterval(updateGamemenu, 20);
  
  backgroundStart = new image("assets/startmenu1.png");
  startbutton = new button(410, 250, 140, 60, "assets/startbutton1.png");
  tutorialbutton = new button(410, 320, 140, 60, "assets/tutorialbutton1.png");
  creditbutton = new button(410, 390, 140, 60, "assets/creditsbutton1.png");
}


function button(x, y, width, height, color){
  this.x = x;
  this.y = y;
  this.width = width*1.3;
  this.height = height*1.3;
  this.color = color;
  this.bWidth = width;
  this.bHeight = height;

  ctx = myGameArea.context;

  this.image = new Image();
  this.image.src = color;

  this.update = function() {
    ctx.drawImage(this.image,
      this.x,
      this.y,
      this.bWidth, this.bHeight);
  }
  
  this.clicked = function() {
  var myleft = this.x;
  var myright = this.x + (this.width);
  var mytop = this.y;
  var mybottom = this.y + (this.height);
  var clicked = true;
  if ((mybottom < myGameArea.y) || (mytop > myGameArea.y) || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
    clicked = false;
  }
  return clicked;
  }
}

function updateGamemenu(){
  myGameArea.clear();

  if (myGameArea.x && myGameArea.y) {
    if (startbutton.clicked()) {
      myGameArea.stop();  
      startGame();
    }
    if(tutorialbutton.clicked()){
      myGameArea.stop(); 
      myGameArea.start();
      myGameArea.interval = setInterval(updateGameTutorial, 20);
      backgroundTutorial = new image("assets/tutorialscreen1.png");
    }
}
  backgroundStart.update();
  startbutton.update();
  tutorialbutton.update();
  creditbutton.update();
}

function updateGameTutorial(){
  myGameArea.clear();

  window.addEventListener('mousedown', function (e) {
    myGameArea.stop(); 
    myGameArea.start();
    myGameArea.interval = setInterval(updateGamemenu, 20);
    
    
  })

  backgroundTutorial.update();
}