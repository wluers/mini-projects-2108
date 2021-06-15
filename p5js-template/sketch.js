function setup() {
  createCanvas(800, 800);
}

function draw() {
  //background(0);

  // create an ellipse ellipse(x, y, w, [h]) (height is optional)
  ellipse(50,50,80,80);

  //make a line: line(x1, y1, x2, y2)
  line(15, 55, 70, 90);


  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
  
}



