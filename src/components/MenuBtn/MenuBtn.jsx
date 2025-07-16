import "./MenuBtn.scss";

const MenuBtn = () => {
	const toggleMenuBtn = () => {
		document
			.querySelector(".header__bottom")
			.classList.toggle("header__bottom--active");
		document.querySelector(".menu-btn").classList.toggle("menu-btn--active");
	};

	return <button onClick={toggleMenuBtn} className="menu-btn"></button>;
};

export default MenuBtn;
