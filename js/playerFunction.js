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
  this.hits = 0;

  this.jump = true; //Is used to prevent infinite jumping. Is set to false after first jump and gets set back to true if player touches the floor again
  
  this.image = new Image();
  this.image.src = color;

  this.update = function() {
    ctx.drawImage(this.image,
        this.x,
        this.y,
        this.width, this.height);
  }

  /*this.update = function(){
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }

  */
  this.newPos = function() {

  //Limiting the Movement Range for the player on the X range
  if ((this.x + this.speedX) >= minX && (this.x + this.speedX) <= maxX) {  
    this.x += this.speedX;
  }
  //Limiting the Movement Range for the player on the Y range
  if ((this.y + this.speedY + this.gravitySpeed) >= minY && (this.y + this.speedY + this.gravitySpeed) <= maxY) { 
    this.gravitySpeed += this.gravity;
    this.y = this.y + this.speedY + this.gravitySpeed;
  } else {
    this.gravitySpeed = 0;
    this.jump = true;
  }
  }
}
  