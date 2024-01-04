import mountBorder from "./Border/Border.js"
import mountShadow from "./Shadow/Shadow.js"

export const mountDecoration = (p5) => {
	mountBorder(p5)
	mountShadow(p5)
}
