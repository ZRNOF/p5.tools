// MIT License
// Copyright © 2023 Zaron
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

let shadowLayer = this

let setShadowLayer = (layer = this) => (shadowLayer = layer)

let shadowColor = (clr = "#000") =>
	(shadowLayer.drawingContext.shadowColor = color(clr))

let shadowBlur = (blur = 20) => (shadowLayer.drawingContext.shadowBlur = blur)

let shadowOffsetX = (xOff = 0) =>
	(shadowLayer.drawingContext.shadowOffsetX = xOff)
let shadowOffsetY = (yOff = 0) =>
	(shadowLayer.drawingContext.shadowOffsetY = yOff)
let shadowOffset = (xOff = 0, yOff = 0) => {
	shadowLayer.drawingContext.shadowOffsetX = xOff
	shadowLayer.drawingContext.shadowOffsetY = yOff
}

let shadow = (clr = "#000", blur = 20, xOff = 0, yOff = 0) => {
	shadowLayer.drawingContext.shadowColor = color(clr)
	shadowLayer.drawingContext.shadowBlur = blur
	shadowLayer.drawingContext.shadowOffsetX = xOff
	shadowLayer.drawingContext.shadowOffsetY = yOff
}

let noShadow = () => {
	shadowLayer.drawingContext.shadowColor = "#000"
	shadowLayer.drawingContext.shadowBlur = 0
	shadowLayer.drawingContext.shadowOffsetX = 0
	shadowLayer.drawingContext.shadowOffsetY = 0
}
