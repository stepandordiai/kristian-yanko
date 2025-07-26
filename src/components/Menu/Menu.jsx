import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import projectsData from "./../../assets/data/portfolio-data.json";
import "./Menu.scss";

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
					.querySelector(".menu-btn")
					.classList.remove("menu-btn--active");

				menuNavLink.forEach((link) =>
					link.classList.remove("menu__nav-link--active")
				);
			});
		});

		document.addEventListener("scroll", () => {
			document
				.querySelector(".header__bottom")
				.classList.remove("header__bottom--active");
			document.querySelector(".menu-btn").classList.remove("menu-btn--active");
			menuNavLink.forEach((link) =>
				link.classList.remove("menu__nav-link--active")
			);
		});
	}, []);

	return (
		<div className="menu">
			<nav className="menu__nav">
				<NavLink
					className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					to={"/"}
				>
					Головна
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					to={"/about"}
				>
					Про мене
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					to={"/projects"}
				>
					<span>Проєкти</span>
					<span className="menu__projects-qty">{projectsData.length}</span>
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					to={"/contact"}
				>
					Контакти
				</NavLink>
			</nav>
			<div>
				<a
					className="menu__link link-effect"
					href="https://www.instagram.com/kristian.janko"
					target="_blank"
				>
					Instagram
				</a>
			</div>
		</div>
	);
};

export default Menu;
