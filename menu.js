var button1;

function startmenu(){
    myGameArea.start();
    myGameArea.interval = setInterval(updateGamemenu, 20);
    //startGame();
    button1 = new Button(400, 250, 70, 30, "black");

}


function Button(x, y, width, height, color, fn){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
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
    button1.update();

    if (mouseX && mouseY) {
        if (button1.clicked()) {
          myGameArea.stop();  
          startGame();
    
        }
    }
    
    
}