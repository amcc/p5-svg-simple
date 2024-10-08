function setup() {
  // we have imported p5-svg in index.html
  // so we can use the SVG canvas below
  createCanvas(400, 400, SVG);
}

function draw() {
  background(255);

  // make rectangles draw from the centre
  rectMode(CENTER);

  // turn off fills
  noFill();

  // draw a rectangle and a circle
  circle(200, 200, 300);
  rect(200, 200, 250);

  // stop the sketch looping
  noLoop();
}

// if we click the mouse / touch screen save the svg
function mousePressed() {
  save("svgTest.svg");
}
