function score(width, height, x, y, winscreen){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.Score = 0;
    this.number = ["assets/images/numbers/sn0.png", "assets/images/numbers/sn1.png", "assets/images/numbers/sn2.png", "assets/images/numbers/sn3.png", "assets/images/numbers/sn4.png", "assets/images/numbers/sn5.png", "assets/images/numbers/sn6.png", "assets/images/numbers/sn7.png", "assets/images/numbers/sn8.png", "assets/images/numbers/sn9.png", "assets/images/numbers/sn10.png", "assets/images/numbers/sn11.png", "assets/images/numbers/sn12.png"];
    this.win = new Image();
    this.win.src = winscreen;

    //copies of variables used by the resize function
    this.cWidth = width;
    this.cHeight = height;
    this.cX = x;
    this.cY = y;

    this.image = new Image();
    this.image.src = this.number[this.Score];

    this.update = function() {
        this.image.src = this.number[this.Score]
        ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width, this.height);
    }
    this.fResize = function() {

        this.width = sca * this.cWidth;
        this.height = sca * this.cHeight;
        this.x = sca * this.cX;
        this.y = sca * this.cY;    
        }
}

function checkScore() {
    myGameArea.stop();
    myGameArea.clear();
    background1.update();
    gamestarted = false;
    if(scorep1.Score == 12){
        ctx.drawImage(scorep1.win,
            0,
            0,
            myGameArea.canvas.width,  myGameArea.canvas.height);
    }
    if(scorep2.Score == 12){
        ctx.drawImage(scorep2.win,
            0,
            0,
            myGameArea.canvas.width, myGameArea.canvas.height);
        }
    setTimeout(function(){ 
        myGameArea.start();
        myGameArea.interval = setInterval(updateGamemenu, 20);
        menustarted = true;
        gamestarted = false;
        gameMusic.stop();
        resize();
        }, 5000);
}