import plusIcon from "/plus.png";
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
			<img className="menu-btn__icon" width={20} src={plusIcon} alt="" />
		</div>
	);
};

export default MenuBtn;
