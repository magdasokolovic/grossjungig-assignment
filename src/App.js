import React from 'react'
import GlobalStyle from './globalStyles'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Navbar, Footer } from "./components";

function App() {
	return (
		<Router>
      <GlobalStyle/>
			<Navbar />
			<h1>my portfolio</h1>
		</Router>
	);
}

export default App;
