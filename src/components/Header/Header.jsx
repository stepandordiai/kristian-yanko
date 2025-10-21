import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import projectsData from "./../../assets/data/portfolio-data.json";
import { NavLink } from "react-router-dom";
import DarkModeBtn from "../DarkModeBtn/DarkModeBtn";
import "./Header.scss";

const Header = () => {
	const { t } = useTranslation();

	const { lng } = useParams();

	const [menuOpen, setMenuOpen] = useState(false);

	const navLinksData = [
		{ id: 1, name: t("home_title"), path: `/${lng}/`, end: true },
		{ id: 2, name: t("about_title"), path: `/${lng}/about` },
		{
			id: 3,
			name: t("projects_title"),
			path: `/${lng}/projects`,
			showProjectsQty: true,
		},
		{ id: 4, name: t("contact_title"), path: `/${lng}/contact` },
	];

	// menu-btn

	const toggleMenuBtn = () => setMenuOpen((prev) => !prev);

	useEffect(() => {
		const closeMenuOnEsc = (e) => {
			if (e.key === "Escape") {
				setMenuOpen(false);
			}
		};

		const closeMenuOnScroll = () => {
			setMenuOpen(false);
		};

		document.addEventListener("keydown", closeMenuOnEsc);
		window.addEventListener("scroll", closeMenuOnScroll);

		return () => {
			document.removeEventListener("keydown", closeMenuOnEsc);
			window.removeEventListener("scroll", closeMenuOnScroll);
		};
	}, []);

	return (
		<header className="header">
			<div className="header__top">
				<NavLink className="header__logo-link" to={`/${lng}/`}>
					<div className="header__logo-link-txt">Kristian Yanko</div>
				</NavLink>
				<nav className="header__nav">
					{navLinksData.map((navLink) => {
						return (
							<NavLink
								key={navLink.id}
								className={({ isActive }) =>
									`header__nav-link link-effect ${
										isActive ? "link-effect--active" : ""
									}`
								}
								to={navLink.path}
								end={navLink.end}
							>
								{navLink.name}
								{navLink.showProjectsQty && (
									<span className="header__projects-qty">
										{projectsData.length}
									</span>
								)}
							</NavLink>
						);
					})}
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
					{/* menu-btn */}
					<button
						onClick={toggleMenuBtn}
						className={`menu-btn ${menuOpen ? "menu-btn--active" : ""}`}
					></button>
				</div>
			</div>
			<div
				className={`header__bottom ${menuOpen ? "header__bottom--active" : ""}`}
			>
				{/* menu */}
				<div className="menu">
					<nav className="menu__nav">
						{navLinksData.map((navLink) => {
							return (
								<NavLink
									onClick={() => setMenuOpen(false)}
									className={({ isActive }) =>
										`menu__nav-link link-effect ${
											isActive ? "link-effect--active" : ""
										} ${menuOpen ? "menu__nav-link--active" : ""}`
									}
									style={
										// To start first element with 0ms transitionDelay, use index
										menuOpen ? { transitionDelay: `${navLink.id * 100}ms` } : {}
									}
									to={navLink.path}
									end={navLink.end}
								>
									{navLink.name}
									{navLink.showProjectsQty && (
										<span className="menu__projects-qty">
											{projectsData.length}
										</span>
									)}
								</NavLink>
							);
						})}
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
			</div>
		</header>
	);
};

export default Header;
