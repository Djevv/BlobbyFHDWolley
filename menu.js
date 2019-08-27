var button1;

function startmenu(){
    myGameArea.start();
    myGameArea.interval = setInterval(updateGamemenu, 20);
    //startGame();
    button1 = new Button(410, 300, 140, 60, "startbutton1");
    backgroundStart = new image("startmenu1.png");

}


function Button(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.image = new Image();
    this.image.src = color;

    this.update = function() {
        ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width, this.height);
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

/*
function checkPos(mouseEvent){
    if(mouseEvent.pageX || mouseEvent.pageY == 0){
        mouseX = mouseEvent.pageX - this.offsetLeft;
        mouseY = mouseEvent.pageY - this.offsetTop;
    }else if(mouseEvent.offsetX || mouseEvent.offsetY == 0){
        mouseX = mouseEvent.offsetX;
        mouseY = mouseEvent.offsetY;
    }
}

function checkClick(mouseEvent){
    
    if(mouseX > button1.x && mouseX < button1.x + button1.width){
        if(mouseY > button1.y && mouseY < button1.y + button1.height){
               
            button1.fn();
            canvas.removeEventListener("mousemove", checkPos);
            canvas.removeEventListener("mouseup", checkClick);
         }
    }
    
}
*/
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