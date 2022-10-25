function Character(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  //below in the green part type the name of your file
  this.img = loadImage("images/rtOne.png");
  this.imageCounter = 0;

  this.display = function () {
    this.img.resize(this.w, this.h);
    image(this.img, this.x, this.y);
    if (keyIsDown(37)) {
      this.x -= 5;
      console.log("test");
    } //end if
    if (keyIsDown(39)) {
      this.x += 5;
      this.animateRight();
    }
  }; //end display
  this.animateRight = function () {
    this.imageCounter += 1;
    switch (this.imageCounter) {
      case 1:
        this.img = loadImage("images/rtOne.png");
        break;
      case 5:
        this.img = loadImage("images/rtTwo.png");
        break;
      case 10:
        this.img = loadImage("images/rtThree.png");
        break;
      case 15:
        this.img = loadImage("images/rtFour.png");
        this.imageCounter = 0;
        break;
      
    }
  };
} //end character
