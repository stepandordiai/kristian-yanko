import LngLayout from "./LngLayout";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import getStorage from "./utils/getStorage";
import { AnimatePresence } from "framer-motion";
import "./i18next";
import "./scss/App.scss";

function App() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				{/* Redirect from / to default language */}
				{/* TODO: */}
				<Route
					path="/"
					element={<Navigate to={`/${getStorage()}/`} replace />}
				/>
				{/* Wrap all routes in /:lng path */}
				<Route path="/:lng/*" element={<LngLayout />} />
			</Routes>
		</AnimatePresence>
	);
}

export default App;
