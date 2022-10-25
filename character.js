function Character(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  //below in the green part type the name of your file
  this.img = loadImage("images/rtOne.png")
  
  this.display = function(){
    this.img.resize(this.w , this.h);
    if(keyIsDown(37)){
      this.x -= 5;
    }//end if
    if(keyIsDown(36)){
      this.x += 5;
    }
  }//end display
}//end character
