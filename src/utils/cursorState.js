import isTouchDevice from "./isTouchDevice";

export function activeCursor() {
	if (isTouchDevice()) return;
	document
		.querySelector(".custom-cursor")
		.classList.add("custom-cursor--active");
}

export function inactiveCursor() {
	if (isTouchDevice()) return;
	document
		.querySelector(".custom-cursor")
		.classList.remove("custom-cursor--active");
}
