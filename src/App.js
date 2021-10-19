import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router} from "react-router-dom";
import { Navbar, Footer, Banner } from "./components";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Banner />
			<Footer />
		</Router>
	);
}

export default App;
