import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<HelmetProvider>
		<Router>
			<App />
		</Router>
	</HelmetProvider>
);
