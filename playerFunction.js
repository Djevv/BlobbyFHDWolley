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
    this.gravity = 0.25;
    this.gravitySpeed = 0;
    this.jump = true; //Hilfsvariable, damit nicht mehrmals gesprungen werden kann. Wird wieder auf True gesetzt wenn der Spieler den Boden berührt.
  
    this.update = function(){
      ctx = myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      }
  
    this.newPos = function() {
  
  //Funktion dient das Spielfeld für den Spieler auf der X-Achse zu begrenzen.
      if ((this.x + this.speedX) >= minX && (this.x + this.speedX) <= maxX) {  
        this.x += this.speedX;
      }
  //Funktion dient das Spielfeld für den Spieler auf der Y-Achse zu begrenzen.
      if ((this.y + this.speedY + this.gravitySpeed) >= minY && (this.y + this.speedY + this.gravitySpeed) <= maxY) { 
        this.gravitySpeed += this.gravity;
        this.y = this.y + this.speedY + this.gravitySpeed;
      } else {
        this.gravitySpeed = 0;
        this.jump = true;
      }
    }
  }
  