// MIT License
// Copyright © 2023 Zaron
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// Random point rectangle
// Use stroke() to color points
function RNDP_Rect(posX, posY, w, h, num, mode="CORNER") {
	push();
	translate(posX, posY);
	let lower, upper;
	if (mode == "CORNER") { lower = 0; upper = 1;	}
	else if (mode == "CENTER") { lower = -0.5; upper = 0.5; }
	while (num--) {
		let x = random(lower, upper);
		let y = random(lower, upper);
		point(x*w, y*h);
	}
	pop();
}

// Random point square
// Use stroke() to color points
function RNDP_Square(posX, posY, s, num, mode="CORNER") {
	RNDP_Rect(posX, posY, s, s, num, mode);
}

// Random point ellipse
// Use stroke() to color points
function RNDP_Ellipse(posX, posY, w, h, num) {
	push();
	translate(posX, posY);
	while (num > 0) {
		let x = random(-1, 1);
		let y = random(-1, 1);
		if (x*x+y*y <= 1) { point(x*w/2, y*h/2); }
		else { continue; }
		num--;
	}
	pop();
}

// Random point circle
// Use stroke() to color points
function RNDP_Circle(posX, posY, d, num) {
	RNDP_Ellipse(posX, posY, d, d, num);
}

// Random point vertical gradient rectangle
// [*] Replace point() with rect()
// ==> Use fill() to color all small rects
function RNDP_VerGradRect(posX, posY, w, h, strength, rule="BTT", mode="CORNER") {
	push();
	noStroke();
	translate(posX, posY);
	rectMode(CORNER);
	if (mode == "CENTER") { translate(-w/2, -h/2); }
	let times = strength*w/50;

	let threshold = (rule == "TTB")
	? function(i) { return (h-i)*map(i, 0, h, 1, 0); }
	: function(i) { return i*map(i, 0, h, 0, 1); };
	
	for (let i = 0; i < h; i++) {
	  for (let t = 0; t < times; t++) {
			if (random(0, h) < threshold(i)) {
				let rnd = int(random(0, w));
				rect(rnd, i, 1);
			}
	  }
	}
	pop();
}

// Random point horizontal gradient rectangle
// [*] Replace point() with rect()
// ==> Use fill() to color all small rects
function RNDP_HorGradRect(posX, posY, w, h, strength, rule="RTL", mode="CORNER") {
	push();
	noStroke();
	translate(posX, posY);
	rectMode(CORNER);
	if (mode == "CENTER") { translate(-w/2, -h/2); }
	let times = strength*h/50;

	let threshold = (rule == "LTR") 
  ? function(i) { return (w-i)*map(i, 0, w, 1, 0); }
  : function(i) { return i*map(i, 0, w, 0, 1); };

	for (let i = 0; i < w; i++) {
		for (let t = 0; t < times; t++) {
			if (random(0, w) < threshold(i)) {
				let rnd = int(random(0, h));
				rect(i, rnd, 1);
			}
		}
	}
	pop();
}