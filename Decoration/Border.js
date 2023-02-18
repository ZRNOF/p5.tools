function Border(color, weight) {
  push();
  noFill();
  stroke(color);
  strokeWeight(weight*2);
  rectMode(CENTER);
  rect(width/2, height/2, width, height);
  pop();
}