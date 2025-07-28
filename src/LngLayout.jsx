import { Routes, Route, useParams } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import ContactMe from "./pages/ContactMe/ContactMe";
import { useEffect } from "react";
import i18n from "i18next";

const LngLayout = () => {
	const { lng } = useParams();

	useEffect(() => {
		if (lng && i18n.language !== lng) {
			i18n.changeLanguage(lng);
		}
	}, [lng]);

	return (
		<>
			<Header />
			<Routes>
				<Route path="" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="projects" element={<Projects />} />
				<Route path="contact" element={<Contact />} />
				<Route path="project-page/:id" element={<ProjectPage />} />
				<Route path="contact-me" element={<ContactMe />} />
			</Routes>
			<CustomCursor />
			<ScrollToTop />
			<Footer />
		</>
	);
};

export default LngLayout;
