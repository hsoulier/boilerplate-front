import { gsap } from "gsap"

const cursor = document.querySelector(".cursor__inner")
const cursorOut = document.querySelector(".cursor__outer")
let mouse = {
	x: 0,
	y: 0,
}
let pos = { ...mouse }
export class Cursor {
	constructor() {
		gsap.ticker.add(this.render)
		document.addEventListener("mousemove", this.onMouseMove)
	}
	onMouseMove(e) {
		mouse.x = e.clientX
		mouse.y = e.clientY
		gsap.set(cursor, {
			...mouse,
		})
	}
	render() {
		const dt = 1 - Math.pow(0.75, gsap.ticker.deltaRatio())
		pos.x += (mouse.x - pos.x) * dt
		pos.y += (mouse.y - pos.y) * dt
		gsap.set(cursorOut, {
			...pos,
		})
	}
}
