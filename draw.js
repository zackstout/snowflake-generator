
function setup() {
  createCanvas(700, 700);
  background(200);
  hexagon(150, width/2, height/2);
  hexagon(147, width/2, height/2);
  hexagon(137, width/2, height/2);

}

function draw() {

}

function hexagon(r, x, y) {
  push();
  translate(x, y);
  for (var i=0; i < 6; i++) {
    stroke('blue');
    line(r * Math.cos(Math.PI / 6), r* Math.sin(Math.PI / 6), r * Math.cos(Math.PI / 6), r*Math.sin( -Math.PI / 6));
    rotate(Math.PI / 3);
  }
  pop();
}

function createStem(l) {
  
}
