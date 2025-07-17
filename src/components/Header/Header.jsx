import { NavLink } from "react-router-dom";
import MenuBtn from "../MenuBtn/MenuBtn";
import Menu from "../Menu/Menu";
import DarkModeBtn from "../DarkModeBtn/DarkModeBtn";
import projectsData from "./../../assets/data/portfolio-data.json";
import "./Header.scss";

const Header = () => {
	const inactiveLink = "header__nav-link link-effect";
	const activeLink = "header__nav-link link-effect link-effect--active";

	return (
		<header className="header">
			<div className="header__top">
				<NavLink className="header__logo-link" to={"/"}>
					<div className="header__logo-link-txt">Kristian Yanko</div>
				</NavLink>
				<nav className="header__nav">
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
						<span>Проекти</span>
						<span className="header__projects-qty">{projectsData.length}</span>
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to={"/contact"}
					>
						Контакти
					</NavLink>
				</nav>
				<div className="header__right-section">
					<DarkModeBtn />
					<a
						className="header__link link-effect"
						href="https://www.instagram.com/kristian.janko"
						target="_blank"
					>
						Instagram
					</a>
					<MenuBtn />
				</div>
			</div>
			<div className="header__bottom">
				<Menu />
			</div>
		</header>
	);
};

export default Header;
