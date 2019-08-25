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