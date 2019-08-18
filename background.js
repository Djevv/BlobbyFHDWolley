function image(color) {
    this.width = myGameArea.canvas.width;
    this.height = myGameArea.canvas.height;
    this.x = 0;
    this.y = 0;

    var ctx = myGameArea.canvas.getContext("2d");

    this.image = new Image();
    this.image.src = color;
    
    this.update = function() {
        this.width = myGameArea.canvas.width;
        this.height = myGameArea.canvas.height;

        ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width, this.height);
      } 
}