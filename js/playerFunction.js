function player(width, height, color, x, y, maxX, maxY, minX, minY) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;    
  this.maxX = maxX;
  this.maxY = maxY;
  this.minX = minX;
  this.minY = minY;
  this.gravity = 0.4;
  this.gravitySpeed = 0;
  this.anim = true;

  //copies of variables used by the resize function
  this.cWidth = width;
  this.cHeight = height;
  this.cX = x;
  this.cY = y;
  this.cMaxX = maxX;
  this.cMaxY = maxY;
  this.cGravity = 0.4;
  this.cMinX = minX;
  this.cMinY = minY;

  this.jump = true; //Is used to prevent infinite jumping. Is set to false after first jump and gets set back to true if player touches the floor again
  
  this.image = new Image();
  this.image.src = color;

  this.update = function() {
    ctx.drawImage(this.image,
      this.x,
      this.y,
      this.width, this.height);
  }

  this.fResize = function() {

    //console.log(this.maxX);
    this.width = sca * this.cWidth;
    this.height = sca * this.cHeight;
    this.x = sca * this.cX;
    this.y = sca * this.cY;
    this.maxX = sca * this.cMaxX;
    this.maxY = sca * this.cMaxY;
    this.gravity = sca * this.cGravity;
    this.minX = sca * this.cMinX;
    this.minY = sca * this.cMinY;

  }

  this.newPos = function() {

    //Limiting the Movement Range for the player on the X range
    if ((this.x + this.speedX) >= this.minX && (this.x + this.speedX) <= this.maxX) {  
      this.x += this.speedX;
    }
    //Limiting the Movement Range for the player on the Y range
    if ((this.y + this.speedY + this.gravitySpeed) >= this.minY && (this.y + this.speedY + this.gravitySpeed) <= this.maxY) { 
      this.gravitySpeed += this.gravity;
      this.y = this.y + this.speedY + this.gravitySpeed;
    } else {
      this.gravitySpeed = 0;
      this.jump = true;
    }
  }

}
  