function setup() {
  createCanvas(800, 600);
}

function draw() {
  // set background color as greyscale integer: background(0) or with rgb: background(r,g,b);
  background(220) 

  // create an ellipse ellipse(x, y, w, [h]) (height is optional)
  ellipse(50,50,80,80);

  //make a line: line(x1, y1, x2, y2)
  line(15, 25, 70, 90);

   // draw continuous circles. alter color with mouse down
/*  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);*/


}