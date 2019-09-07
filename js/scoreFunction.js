function score(width, height, color, x, y, text){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.Score = 0;
    this.text = text;

    //copies of variables used by the resize function
    this.cWidth = width;
    //this.cHeight = height;
    this.cX = x;
    this.cY = y;

    this.update = function() {
        ctx = myGameArea.context;
        ctx.font = this.width + " " + this.height;
        ctx.fillStyle = color;
        ctx.fillText(this.text, this.x, this.y);
    }
    this.fResize = function() {

        //console.log(this.maxX);
        //this.width = sca * this.cWidth;
        //this.height = sca * this.cHeight;
        this.x = sca * this.cX;
        this.y = sca * this.cY;    
        }
}

/*
function checkScore() {
    myGameArea.stop();
    gamestarted = false;
    if(scorep1.Score == 3){
    ctx = myGameArea.context;
        ctx.font = "20px" + " " + "Consolas";
        ctx.fillStyle = "black";
        ctx.fillText("Player 1 wins!", 450, 200);
    }
    if(scorep2.Score == 3){
        ctx = myGameArea.context;
            ctx.font = "20px" + " " + "Consolas";
            ctx.fillStyle = "black";
            ctx.fillText("Player 2 wins!", 450, 200);
        }
    setTimeout(function(){ 
        myGameArea.start();
        myGameArea.interval = setInterval(updateGamemenu, 20);
        menustarted = true;
        gamestarted = false;
    }, 5000);
}
*/


function checkScore() {
    myGameArea.stop();
    gamestarted = false;
    if(scorep1.Score == 3){
        ctx = myGameArea.canvas.getContext("2d");
        this.image = new Image();
        this.image.src = "assets/images/backgrounds/p1win.png";
        ctx.drawImage(this.image,
            0,
            0,
            1920, 1080);
    }
    if(scorep2.Score == 3){
        ctx = myGameArea.canvas.getContext("2d");
        this.image = new Image();
        this.image.src = "assets/images/backgrounds/p2win.png";
        ctx.drawImage(this.image,
            0,
            0,
            myGameArea.canvas.width, myGameArea.canvas.height);
        }
    setTimeout(function(){ 
        myGameArea.start();
        myGameArea.interval = setInterval(updateGamemenu, 20);
        menustarted = true;
        gamestarted = false;
    }, 5000);
}