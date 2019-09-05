
window.addEventListener('resize', resize);

var sca = 1;

gamestarted = false;
menustarted = false;
tutorialstarted = false;

function resize(){
  var scaW = (window.innerWidth/960)*0.9;
  var scaH = (window.innerHeight/540)*0.9;


  if (scaH < scaW) {
    sca = scaH;
  } else {
    sca = scaW;
  }
  
  if(myGameArea.canvas.width <= window.innerWidth && myGameArea.canvas.height <= window.innerHeight && sca>=1){
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
    
  }


  }

}