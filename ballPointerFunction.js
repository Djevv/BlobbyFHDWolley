function ballPointer(width, height, color, y) {
    this.width = width;
    this.height = height;
    this.x = ball1.x;
    this.y = y;

    this.newPos = function() {
        this.x = ball1.x;
        this.y = 5;
    }
    this.update = function() { 
        if(ball1.y < 0){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    } 
}