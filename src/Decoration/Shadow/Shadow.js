// MIT License
// Copyright © 2024 Zaron
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

const shadowColor = (p, color = "#000") =>
	(p.drawingContext.shadowColor = p.color(color))

const shadowBlur = (p, blur = 20) => (p.drawingContext.shadowBlur = blur)

const shadowOffsetX = (p, xOff = 0) => (p.drawingContext.shadowOffsetX = xOff)
const shadowOffsetY = (p, yOff = 0) => (p.drawingContext.shadowOffsetY = yOff)
const shadowOffset = (p, xOff = 0, yOff = 0) => {
	p.drawingContext.shadowOffsetX = xOff
	p.drawingContext.shadowOffsetY = yOff
}

const shadow = (p, color = "#000", blur = 20, xOff = 0, yOff = 0) => {
	p.drawingContext.shadowColor = p.color(color)
	p.drawingContext.shadowBlur = blur
	p.drawingContext.shadowOffsetX = xOff
	p.drawingContext.shadowOffsetY = yOff
}

const noShadow = (p) => {
	p.drawingContext.shadowColor = "#000"
	p.drawingContext.shadowBlur = 0
	p.drawingContext.shadowOffsetX = 0
	p.drawingContext.shadowOffsetY = 0
}

/**
 * Mount Shadow to p5
 * @param {p5} p5 - p5
 */
const mountShadow = (p5) => {
	/**
	 * Set the shadow color
	 * @param { string | number } color - color
	 */
	p5.prototype.shadowColor = function (color = "#000") {
		shadowColor(this, color)
	}

	/**
	 * Set the shadow blur
	 * @param { number } blur - blur value
	 */
	p5.prototype.shadowBlur = function (blur = 20) {
		shadowBlur(this, blur)
	}

	/**
	 * Set the shadow offset in the X direction
	 * @param { number } xOff - X offset value
	 */
	p5.prototype.shadowOffsetX = function (xOff = 0) {
		shadowOffsetX(this, xOff)
	}

	/**
	 * Set the shadow offset in the Y direction
	 * @param { number } yOff - Y offset value
	 */
	p5.prototype.shadowOffsetY = function (yOff = 0) {
		shadowOffsetY(this, yOff)
	}

	/**
	 * Set both the X and Y shadow offsets
	 * @param { number } xOff - X offset value
	 * @param { number } yOff - Y offset value
	 */
	p5.prototype.shadowOffset = function (xOff = 0, yOff = 0) {
		shadowOffset(this, xOff, yOff)
	}

	/**
	 * Set the shadow properties
	 * @param { string | number } color - color
	 * @param { number } blur - blur value
	 * @param { number } xOff - X offset value
	 * @param { number } yOff - Y offset value
	 */
	p5.prototype.shadow = function (
		color = "#000",
		blur = 20,
		xOff = 0,
		yOff = 0
	) {
		shadow(this, color, blur, xOff, yOff)
	}

	/**
	 * Remove the shadow
	 */
	p5.prototype.noShadow = function () {
		noShadow(this)
	}
}

export default mountShadow
