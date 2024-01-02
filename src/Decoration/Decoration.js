import { Border } from "./Border/Border.js"

export const mountDecoration = (p5) => {
	/**
	 * Canvas Border
	 * @param { string | number } color - border color
	 * @param { number } width - border width
	 */
	p5.prototype.Border = function (color, width) {
		Border(this, color, width)
	}
}
