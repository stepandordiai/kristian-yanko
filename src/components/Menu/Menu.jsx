import { NavLink } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
	const inactiveLink = "menu__nav-link link-effect";
	const activeLink =
		"menu__nav-link menu__nav-link--active link-effect link-effect--active";
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
