function boden(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  
    this.update = function() {
      ctx = myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      }
  
  
    this.collisionBall = function(ball1) {
      var bLeft = this.x;
      var bRight = this.x + (this.width);
      var bTop = this.y;
      var bBottom = this.y + (this.height);
      var b1Left = ball1.x;
      var b1Right = ball1.x + (ball1.width);
      var b1Top =  ball1.y;
      var b1Bottom = ball1.y + (ball1.height)
      var collision = true;
  
      if((bBottom < b1Top) ||
      (bTop > b1Bottom) ||
      (bRight < b1Left) ||
      (bLeft > b1Right)) {
        collision = false;
      }
      return collision;
    }
  }
  