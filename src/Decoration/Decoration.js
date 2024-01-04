import mountBorder from "./Border/Border.js"
import mountShadow from "./Shadow/Shadow.js"

/**
 * Mount Decoration to p5
 * @param {p5} p5 - p5
 */
export const mountDecoration = (p5) => {
	mountBorder(p5)
	mountShadow(p5)
}
