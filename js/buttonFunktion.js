function button(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.width = width*1.3;
    this.height = height*1.3;
    this.color = color;
    this.bWidth = width;
    this.bHeight = height;
  
    //copies of variables used by the resize function
    this.cWidth = width * 1.3;
    this.cHeight = height* 1.3;
    this.cX = x;
    this.cY = y;
    this.cbWidth = width;
    this.cbHeigth = height;
  
    ctx = myGameArea.context;
  
    this.image = new Image();
    this.image.src = color;
  
    this.update = function() {
      ctx.drawImage(this.image,
        this.x,
        this.y,
        this.bWidth, this.bHeight);
    }
  
    this.fResize = function() {
  
      this.width = sca * this.cWidth;
      this.height = sca * this.cHeight;
      this.x = sca * this.cX;
      this.y = sca * this.cY;
      this.bWidth = sca * this.cbWidth;
      this.bHeight = sca * this.cbHeigth;
    }
    
    this.clicked = function() {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var clicked = true;
    if ((mybottom < myGameArea.y) || (mytop > myGameArea.y) || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
      clicked = false;
    }
    return clicked;
    }
  }