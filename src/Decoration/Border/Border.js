// MIT License
// Copyright © 2024 Zaron
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

const Border = (p, color, width) => {
	p.push()
	p.noFill()
	p.stroke(p.color(color))
	p.strokeWeight(width * 2)
	p.rectMode(p.CENTER)
	p.rect(p.width / 2, p.height / 2, p.width, p.height)
	p.pop()
}

/**
 * Mount Border to p5
 * @param {p5} p5 - p5
 */
const mountBorder = (p5) => {
	/**
	 * Canvas Border
	 * @param { string | number } color - border color
	 * @param { number } width - border width
	 */
	p5.prototype.Border = function (color, width) {
		Border(this, color, width)
	}
}

export default mountBorder
