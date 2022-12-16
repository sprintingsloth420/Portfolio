import React, { Component } from 'react';
import { HashRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import Navbar from './pages/Navbar.js';
import About from './pages/About.js';
import Art from './pages/Art.js';
import Persona from './pages/Persona.js';
import Responsive from './pages/Responsive.js';
import Iterative from './pages/Iterative.js';
import Development from './pages/Development.js';

// source: https://www.geeksforgeeks.org/reactjs-router/
class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
      <Navbar/>
      <Routes>
          <Route exact path='/CS1300_Portfolio' element={< Home />}></Route>
          <Route exact path='/CS1300_Portfolio/about' element={< About />}></Route>
          <Route exact path='/CS1300_Portfolio/art' element={< Art />}></Route>
          <Route exact path='/CS1300_Portfolio/persona' element={< Persona />}></Route>
          <Route exact path='/CS1300_Portfolio/responsive' element={< Responsive />}></Route>
          <Route exact path='/CS1300_Portfolio/iterative' element={< Iterative />}></Route>
          <Route exact path='/CS1300_Portfolio/development' element={< Development />}></Route>
      </Routes>
		</div>
	</Router>
);
}
}

export default App;
