function setup() {
  createCanvas(windowWidth / 2, windowHeight / 2);

  r = random(255);
  g = random(255);
  b = random(255);
}



function polygondrawing() {
  background(102);



  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50);
  polygon(0, 0, 80, 20);
  pop();



  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / -60.0);
  star(0, 0, 5, 80, 20);
  pop();



}

function draw() {
  if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);


  ellipse(mouseX, mouseY, 80, 80);
  polygondrawing();
}



function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape();
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape();
}
