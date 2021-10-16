import { gsap } from "gsap"

const cursor = document.querySelector(".cursor__inner")
const cursorOut = document.querySelector(".cursor__outer")
const mouse = {
	x: 0,
	y: 0,
}
const pos = { ...mouse }

export class Cursor {
	public constructor() {
		gsap.ticker.add(this.render)
		document.addEventListener("mousemove", this.onMouseMove)
	}
	private onMouseMove(e: MouseEvent) {
		mouse.x = e.clientX
		mouse.y = e.clientY
		gsap.set(cursor, {
			...mouse,
		})
	}
	private render() {
		const dt: number = 1 - Math.pow(0.75, gsap.ticker.deltaRatio())
		pos.x += (mouse.x - pos.x) * dt
		pos.y += (mouse.y - pos.y) * dt
		gsap.set(cursorOut, {
			...pos,
		})
	}
}
