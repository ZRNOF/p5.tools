/*
	MIT License
	Copyright (c) 2023 Zaron
	See LICENSE file for details.
	https://github.com/ZRNOF/p5.js-Toolbox
*/

function Border(color, weight) {
  push();
  noFill();
  stroke(color);
  strokeWeight(weight*2);
  rectMode(CENTER);
  rect(width/2, height/2, width, height);
  pop();
}