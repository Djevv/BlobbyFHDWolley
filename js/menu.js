var startbutton;
var clickWait = false;

function startmenu(){
  myGameArea.start();
  myGameArea.interval = setInterval(updateGamemenu, 1);
  
  backgroundStart = new image("assets/images/startmenu1.png");
  startbutton = new button(410, 250, 140, 60, "assets/images/startbutton1.png");
  tutorialbutton = new button(410, 320, 140, 60, "assets/images/tutorialbutton1.png");
  creditbutton = new button(410, 390, 140, 60, "assets/images/creditsbutton1.png");

  tutorialbuttonBack = new button(50, 440, 140, 60, "assets/images/tutorialbutton1.png");
  startbutton2 = new button(770, 440, 140, 60, "assets/images/startbutton1.png");

  menustarted = true;
  resize();

  updateGamemenu();
}


function button(x, y, width, height, color){
  this.x = x;
  this.y = y;
  this.width = width*1.3;
  this.height = height*1.3;
  this.color = color;
  this.bWidth = width;
  this.bHeight = height;

  //copies of variables used by the resize function
  this.cWidth = width * 1.3;
  this.cHeight = height* 1.3;
  this.cX = x;
  this.cY = y;
  this.cbWidth = width;
  this.cbHeigth = height;

  ctx = myGameArea.context;

  this.image = new Image();
  this.image.src = color;

  this.update = function() {
    ctx.drawImage(this.image,
      this.x,
      this.y,
      this.bWidth, this.bHeight);
  }
  this.fResize = function() {

    //console.log(this.maxX);
    this.width = sca * this.cWidth;
    this.height = sca * this.cHeight;
    this.x = sca * this.cX;
    this.y = sca * this.cY;
    this.bWidth = sca * this.cbWidth;
    this.bHeight = sca * this.cbHeigth;
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
        //myGameArea.interval = setInterval(updateGameTutorial, 1);
    }
    if(tutorialbutton.clicked()){
      myGameArea.stop(); 
      myGameArea.start();
      myGameArea.interval = setInterval(updateGameTutorial, 1);
      backgroundTutorial = new image("assets/images/tutorialscreen1.png");
      menustarted = false;
      tutorialstarted = true;
      resize();
    }
  }
  backgroundStart.update();
  startbutton.update();
  tutorialbutton.update();
  creditbutton.update();
}

function updateGameTutorial(){
  myGameArea.clear();
  
  
  if (myGameArea.x && myGameArea.y) {
    if (tutorialbuttonBack.clicked()){
      myGameArea.stop(); 
      myGameArea.start();
      myGameArea.interval = setInterval(updateGamemenu, 1);
      menustarted = true;
      tutorialstarted = false;
      resize();
    }
    if (startbutton2.clicked()){
      myGameArea.stop(); 
      startGame();
    }
  }
  
  

  
  backgroundTutorial.update();
  tutorialbuttonBack.update();
  startbutton2.update();
}
