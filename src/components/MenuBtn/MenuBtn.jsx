import Menu from "../Menu/Menu";
import "./MenuBtn.scss";

const MenuBtn = () => {
	const toggleMenuBtn = () => {
		document
			.querySelector(".header__bottom")
			.classList.toggle("header__bottom--active");
		document
			.querySelector(".menu-btn__icon")
			.classList.toggle("menu-btn__icon--active");
	};

	return (
		<div onClick={toggleMenuBtn} className="menu-btn">
			<span className="menu-btn__icon">+</span>
		</div>
	);
};

export default MenuBtn;
