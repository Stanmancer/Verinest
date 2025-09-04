import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "./index.css";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));

if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("/service-worker.js")
			.then((reg) => console.log("Service worker registered:", reg))
			.catch((err) =>
				console.error("Service worker registration failed:", err)
			);
	});
}

root.render(
	<StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<GoogleOAuthProvider clientId="3483785848-qchs40cgvp0kur4fec437i0bk5j8art4.apps.googleusercontent.com">
					<App />
				</GoogleOAuthProvider>
			</AuthProvider>
		</BrowserRouter>
	</StrictMode>
);
