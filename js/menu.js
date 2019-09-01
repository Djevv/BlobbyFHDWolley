var button1;

function startmenu(){
    myGameArea.start();
    myGameArea.interval = setInterval(updateGamemenu, 20);
    //startGame();
    
    backgroundStart = new image("assets/startmenu1.png");
    button1 = new button(410, 300, 280, 120, "assets/startbutton1.png");
}


function button(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    ctx = myGameArea.context;

    this.image = new Image();
    this.image.src = color;

    this.update = function() {
        ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width/2, this.height/2);
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
    //draw();

    if (myGameArea.x && myGameArea.y) {
        if (button1.clicked()) {
          myGameArea.stop();  
          startGame();
        }
    }

    backgroundStart.update();
    button1.update();
}