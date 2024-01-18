// MIT License
// Copyright © 2024 Zaron Chen
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

/**
 * Random point rectangle
 * Use stroke() & strokeWeight() to style points
 * @param { number } posX - x position
 * @param { number } posY - y position
 * @param { number } w - width
 * @param { number } h - height
 * @param { number } num - number of random points
 */
const rpRect = (p, posX, posY, w, h, num) => {
	const mode = p._renderer._rectMode
	p.push()
	p.translate(posX, posY)
	const lower = mode === p.CENTER ? -0.5 : 0
	const upper = mode === p.CENTER ? 0.5 : 1
	while (num--) {
		const x = p.random(lower, upper)
		const y = p.random(lower, upper)
		p.point(x * w, y * h)
	}
	p.pop()
}

/**
 * Random point square
 * Use stroke() & strokeWeight() to style points
 * @param { number } posX - x position
 * @param { number } posY - y position
 * @param { number } s - size
 * @param { number } num - number of random points
 */
const rpSquare = (p, posX, posY, s, num) => {
	rpRect(p, posX, posY, s, s, num)
}

/**
 * Random point ellipse
 * Use stroke() & strokeWeight() to style points
 * @param { number } posX - x position
 * @param { number } posY -y position
 * @param { number } w - width
 * @param { number } h - height
 * @param { number } num - number of random points
 */
const rpEllipse = (p, posX, posY, w, h, num) => {
	p.push()
	p.translate(posX, posY)
	while (num > 0) {
		const x = p.random(-1, 1)
		const y = p.random(-1, 1)
		if (x * x + y * y <= 1) p.point((x * w) / 2, (y * h) / 2)
		else continue
		num--
	}
	p.pop()
}

/**
 * Random point circle
 * Use stroke() & strokeWeight() to style points
 * @param { number } posX - x position
 * @param { number } posY - y position
 * @param { number } r - radius
 * @param { number } num - number of random points
 */
const rpCircle = (p, posX, posY, r, num) => {
	rpEllipse(p, posX, posY, r, r, num)
}

/**
 * Random point vertical gradient rectangle
 * Use fill() to color points
 * @param { number } posX - x position
 * @param { number } posY - y position
 * @param { number } w - width
 * @param { number } h - height
 * @param { number } strength - strength
 * @param { p5.BT | p5.TB } rule - gradient rule, BT(Bottom to Top, default) | TB(Top to Bottom)
 */
const rpVerGradRect = (p, posX, posY, w, h, strength, rule) => {
	const mode = p._renderer._rectMode
	p.push()
	p.noStroke()
	p.translate(posX, posY)
	p.rectMode(p.CORNER)
	if (mode === p.CENTER) p.translate(-w / 2, -h / 2)
	const times = (strength * w) / 50

	const threshold =
		rule === p.TB
			? (i) => (h - i) * p.map(i, 0, h, 1, 0)
			: (i) => i * p.map(i, 0, h, 0, 1)

	for (let i = 0; i < h; i++) {
		for (let t = 0; t < times; t++) {
			if (p.random(0, h) < threshold(i)) {
				const rnd = p.int(p.random(0, w))
				p.rect(rnd, i, 1)
			}
		}
	}
	p.pop()
}

/**
 * Random point horizontal gradient rectangle
 * Use fill() to color points
 * @param { number } posX - x position
 * @param { number } posY - y position
 * @param { number } w - width
 * @param { number } h - height
 * @param { number } strength - strength
 * @param { p5.RL | p5.LR } rule - gradient rule, RL(Right to Left, default) | LR(Left to Right)
 */
const rpHorGradRect = (p, posX, posY, w, h, strength, rule) => {
	const mode = p._renderer._rectMode
	p.push()
	p.noStroke()
	p.translate(posX, posY)
	p.rectMode(p.CORNER)
	if (mode === p.CENTER) p.translate(-w / 2, -h / 2)
	const times = (strength * h) / 50

	const threshold =
		rule === p.LR
			? (i) => (w - i) * p.map(i, 0, w, 1, 0)
			: (i) => i * p.map(i, 0, w, 0, 1)

	for (let i = 0; i < w; i++) {
		for (let t = 0; t < times; t++) {
			if (p.random(0, w) < threshold(i)) {
				const rnd = p.int(p.random(0, h))
				p.rect(i, rnd, 1)
			}
		}
	}
	p.pop()
}

/**
 * Mount RandomPoint to p5
 * @param { p5 } p5 - p5
 */
export const mountRP = (p5) => {
	p5.prototype.rpRect = function (posX, posY, w, h, num) {
		rpRect(this, posX, posY, w, h, num)
	}
	p5.prototype.rpSquare = function (posX, posY, s, num) {
		rpSquare(this, posX, posY, s, num)
	}
	p5.prototype.rpEllipse = function (posX, posY, w, h, num) {
		rpEllipse(this, posX, posY, w, h, num)
	}
	p5.prototype.rpCircle = function (posX, posY, r, num) {
		rpCircle(this, posX, posY, r, num)
	}
	p5.prototype.rpVerGradRect = function (posX, posY, w, h, strength, rule) {
		rpVerGradRect(this, posX, posY, w, h, strength, rule)
	}
	p5.prototype.rpHorGradRect = function (posX, posY, w, h, strength, rule) {
		rpHorGradRect(this, posX, posY, w, h, strength, rule)
	}
	p5.prototype.BT = "BT"
	p5.prototype.TB = "TB"
	p5.prototype.RL = "RL"
	p5.prototype.LR = "LR"
}
