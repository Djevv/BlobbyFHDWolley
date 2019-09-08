var startbutton;
var clickWait = false;

function startmenu(){
  myGameArea.start();
  myGameArea.interval = setInterval(updateGamemenu, 1);
  
  backgroundStart = new image("assets/images/backgrounds/startmenu1.png");
  startbutton = new button(410, 250, 140, 60, "assets/images/buttons/startbutton1.png");
  tutorialbutton = new button(410, 320, 140, 60, "assets/images/buttons/tutorialbutton1.png");
  creditbutton = new button(410, 390, 140, 60, "assets/images/buttons/creditsbutton1.png");

  tutorialbuttonBack = new button(50, 440, 140, 60, "assets/images/buttons/backtomenubutton1.png");
  startbutton2 = new button(770, 440, 140, 60, "assets/images/buttons/startbutton1.png");

  creditsbuttonBack = new button(50, 440, 140, 60, "assets/images/buttons/backtomenubutton1.png");
  startbutton3 = new button(770, 440, 140, 60, "assets/images/buttons/startbutton1.png");
  backgroundCredits = new image("assets/images/backgrounds/Credits.png");

  backgroundTutorial = new image("assets/images/backgrounds/tutorialscreen1.png");
  clickSound = new sound ("assets/sounds/donk1.mp3");

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
      clickSound.play();
      menustarted = false;
      myGameArea.stop();  
      startGame();
      //myGameArea.interval = setInterval(updateGameTutorial, 1);
    }
    
    if(tutorialbutton.clicked()){
      clickSound.play();
      myGameArea.stop(); 
      myGameArea.start();
      myGameArea.interval = setInterval(updateGameTutorial, 1);
      menustarted = false;
      tutorialstarted = true;
      resize();
    }

    if(creditbutton.clicked()){
      clickSound.play();
      myGameArea.stop(); 
      myGameArea.start();
      myGameArea.interval = setInterval(updateGameCredits, 1);
      menustarted = false;
      credits = true;
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
      clickSound.play();
      myGameArea.stop(); 
      myGameArea.start();
      myGameArea.interval = setInterval(updateGamemenu, 1);
      menustarted = true;
      tutorialstarted = false;
      resize();
    }

    if (startbutton2.clicked()){
      clickSound.play();
      tutorialstarted = false;
      myGameArea.stop(); 
      startGame();
    }
  }
    
  backgroundTutorial.update();
  tutorialbuttonBack.update();
  startbutton2.update();
 
}

function updateGameCredits(){
  myGameArea.clear();
  
  
  if (myGameArea.x && myGameArea.y) {
    if (creditsbuttonBack.clicked()){
      clickSound.play();
      myGameArea.stop(); 
      myGameArea.start();
      myGameArea.interval = setInterval(updateGamemenu, 1);
      menustarted = true;
      credits = false;
      resize();
    }

    if (startbutton3.clicked()){
      clickSound.play();
      credits = false;
      myGameArea.stop(); 
      startGame();
    }
  }
    
  backgroundCredits.update();
  creditsbuttonBack.update();
  startbutton3.update();
}

