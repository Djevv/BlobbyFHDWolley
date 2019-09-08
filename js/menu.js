var startbutton;
var version = "V 1.0";

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

function updateGamemenu(){
  myGameArea.clear();

  if (myGameArea.x && myGameArea.y) {
    if (startbutton.clicked()) {
      clickSound.play();
      menustarted = false;
      myGameArea.stop();  
      startGame();
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

  ctx.font = "30px" + " " + "Consolas";
  ctx.fillStyle = "black";
  ctx.fillText(version, 30, 30);
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

