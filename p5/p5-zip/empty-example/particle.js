var gravity =0.1;

function article(x, y){
  this.x = x;
  this.y = y;

  this.yspeed = 0;

  this.update =function(){
    this.y += this.yspeed;
    this.yspeed += gravity;

    if(this.y > height){
      this.y = height;
      this.yspeed *= -0.9;
    }

  };

  this.show= function(){
    stroke(0);
    fill (0, 250);
    ellipse(this.x, this.y, 24, 24 );
  };
}
