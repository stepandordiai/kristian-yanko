import "./MenuBtn.scss";

const MenuBtn = () => {
	const toggleMenuBtn = () => {
		const headerBottom = document.querySelector(".header__bottom");

		// TODO:
		const isActive = headerBottom.classList.contains("header__bottom--active");

		if (isActive) {
			headerBottom.classList.remove("header__bottom--active");
			document.querySelector(".menu-btn").classList.remove("menu-btn--active");

			const menuNavLinks = document.querySelectorAll(".menu__nav-link");

			menuNavLinks.forEach((link) =>
				link.classList.remove("menu__nav-link--active")
			);
		} else {
			headerBottom.classList.add("header__bottom--active");
			document.querySelector(".menu-btn").classList.add("menu-btn--active");

			const menuNavLinks = document.querySelectorAll(".menu__nav-link");

			menuNavLinks.forEach((link, index) =>
				setTimeout(() => {
					link.classList.add("menu__nav-link--active");
					// I start with index 1 to ensure the first element has also timeout and prevent to start it immediately
				}, (index + 1) * 100)
			);
		}
	};

	return <button onClick={toggleMenuBtn} className="menu-btn"></button>;
};

export default MenuBtn;
