import { NavLink } from "react-router-dom";
import "./Menu.scss";
import { useEffect } from "react";

const Menu = () => {
	const inactiveLink = "menu__nav-link link-effect";
	const activeLink = "menu__nav-link link-effect link-effect--active";

	useEffect(() => {
		const menuNavLink = document.querySelectorAll(".menu__nav-link");

		menuNavLink.forEach((link) => {
			link.addEventListener("click", () => {
				document
					.querySelector(".header__bottom")
					.classList.remove("header__bottom--active");
				document
					.querySelector(".menu-btn__icon")
					.classList.remove("menu-btn__icon--active");
			});
		});

		document.addEventListener("scroll", () => {
			document
				.querySelector(".header__bottom")
				.classList.remove("header__bottom--active");
			document
				.querySelector(".menu-btn__icon")
				.classList.remove("menu-btn__icon--active");
		});
	}, []);

	return (
		<div className="menu">
			<nav className="menu__nav">
				<NavLink
					className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					to={"/"}
				>
					Home
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					to={"/about"}
				>
					About
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					to={"/work"}
				>
					Work
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					to={"/contact"}
				>
					Contact
				</NavLink>
			</nav>
		</div>
	);
};

export default Menu;
