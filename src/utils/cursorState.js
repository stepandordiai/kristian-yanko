import isTouchDevice from "./isTouchDevice";

let isLocked = false;

export function activeCursor() {
	if (isTouchDevice()) return;
	if (!isLocked) {
		document
			.querySelector(".custom-cursor")
			.classList.add("custom-cursor--active");
	}
}

export function inactiveCursor() {
	if (isTouchDevice()) return;
	if (!isLocked) {
		document
			.querySelector(".custom-cursor")
			.classList.remove("custom-cursor--active");
	}
}

export function removeCursor() {
	if (isTouchDevice()) return;
	document
		.querySelector(".custom-cursor")
		.classList.remove("custom-cursor--active");
	isLocked = true;

	setTimeout(() => {
		isLocked = false;
	}, 1000);
}
