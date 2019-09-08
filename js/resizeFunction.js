
window.addEventListener('resize', resize);

var sca = 1;

gamestarted = false;
menustarted = false;
tutorialstarted = false;
credits = false;

function resize(){
  var scaW = (window.innerWidth/960)*0.93;
  var scaH = (window.innerHeight/540)*0.93;


  if (scaH < scaW) {
    sca = scaH;
  } else {
    sca = scaW;
  }
  
  if(sca>=1){
  myGameArea.canvas.width = 960 * sca;
  myGameArea.canvas.height = 540 * sca;
  
  if(gamestarted){
    player1.fResize();
    player2.fResize();
    myNetz.fResize();
    bodenp1.fResize();
    bodenp2.fResize();
    ball1.fResize();
    scorep1.fResize();
    scorep2.fResize();
  }

  if(menustarted){
    startbutton.fResize();
    tutorialbutton.fResize();
    creditbutton.fResize();
    version.fResize();
  }
  if(tutorialstarted){
    tutorialbuttonBack.fResize();
    startbutton2.fResize();
  }
  if(credits){
    creditsbuttonBack.fResize();
    startbutton3.fResize();
  }

  }

}