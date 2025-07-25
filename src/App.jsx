import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import "./scss/App.scss";
import CustomCursor from "./components/CustomCursor/CustomCursor";

function App() {
	const location = useLocation();

	return (
		<>
			<ScrollToTop />
			<Header />
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/project-page/:id" element={<ProjectPage />} />
				</Routes>
			</AnimatePresence>
			<CustomCursor />
			<Footer />
		</>
	);
}

export default App;
