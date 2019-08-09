var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.interval = setInterval(updateGameArea, 20);   // Game Loop mit 20fps
      
      window.addEventListener('keydown', function (e) {
        myGameArea.keys = (myGameArea.keys || []);
        myGameArea.keys[e.keyCode] = true;
      })
  
      window.addEventListener('keyup', function (e) {
        myGameArea.keys[e.keyCode] = false;
        if (myGameArea.keys[38] == false && player1.jump == true) {
          player1.gravitySpeed = 0.5;
          player1.jump = false;
        }
        if (myGameArea.keys[87] == false && player2.jump == true) {
          player2.gravitySpeed = 0.5;
          player2.jump = false;
        }
      })
    },
    clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }