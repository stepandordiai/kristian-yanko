export function activeCursor() {
	document
		.querySelector(".custom-cursor")
		.classList.add("custom-cursor--active");
}

export function inactiveCursor() {
	document
		.querySelector(".custom-cursor")
		.classList.remove("custom-cursor--active");
}
