function score(width, height, color, x, y, text){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.Score = 0;
    this.text = text;

    this.update = function() {
        ctx = myGameArea.context;
        ctx.font = this.width + " " + this.height;
        ctx.fillStyle = color;
        ctx.fillText(this.text, this.x, this.y);
    }
}

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
    }, 5000);
}