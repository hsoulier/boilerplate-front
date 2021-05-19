import "../style/main.scss"
import { onResize } from "./utils"
import { Cursor } from "./utils/Cursor"

class App {
	constructor() {
		window.addEventListener("resize", onResize)
		onResize()
		window.addEventListener("load", () => {
			const cursor = new Cursor()
		})
	}
}

window.addEventListener("DOMContentLoaded", () => {
	const app = new App()
})
