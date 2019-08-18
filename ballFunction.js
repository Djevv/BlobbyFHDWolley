function ball(width, height, color, x, y, maxX, maxY) {
    this.width = width;
    this.height = height;
    this.speedX;
    this.speedY;
    this.x = x;
    this.y = y;    
    this.maxX = maxX;
    this.maxY = maxY;
    this.minX = 0;
    this.minY = 0;
    this.gravity = 0.1;
    this.gravitySpeed = 0;
    this.gravityX = 0.1;
    this.gravitySpeedX = 0;

    this.image = new Image();
    this.image.src = color;

  
    this.update = function() {
        ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width, this.height);
      }
  
    this.newPos = function() {
      if ((this.x + this.speedX) >= this.minX && (this.x + this.speedX + this.gravitySpeedX) <= this.maxX) {
        this.gravitySpeedX += this.gravityX;
        this.x = this.x + this.speedX; 
      } else {
        this.speedX *= (-1);
      }
  
      if ((this.y + this.speedY + this.gravitySpeed) >= this.minY && (this.y + this.speedY + this.gravitySpeed) <= this.maxY) {
        this.gravitySpeed += this.gravity;
        this.y = this.y + this.speedY + this.gravitySpeed;
      } else {
        this.gravitySpeed = 0;
        this.gravitySpeedX = 0;
      }
    }
  
    this.collisionp1 = function(player1) {
      var bLeft = this.x;
      var bRight = this.x + (this.width);
      var bTop = this.y;
      var bBottom = this.y + (this.height);
      var p1Left = player1.x;
      var p1Right = player1.x + (player1.width);
      var p1Top =  player1.y;
      var p1Bottom = player1.y + (player1.height)
      var collision = true;
  
      if((bBottom < p1Top) ||
      (bTop > p1Bottom) ||
      (bRight < p1Left) ||
      (bLeft > p1Right)) {
        collision = false;
      }
      return collision;
    }
  
}
