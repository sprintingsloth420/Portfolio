import React, { Component } from 'react';
import { HashRouter,Routes, Route, Link } from 'react-router-dom';
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
    <div className="App">
	<HashRouter>
      <Navbar/>
      <Routes>
          <Route exact path='/' element={< Home />}></Route>
          {/* <Route exact path='/CS1300_Portfolio/about' element={< About />}></Route> */}
          <Route exact path='/art' element={< Art />}></Route>
          <Route exact path='/persona' element={< Persona />}></Route>
          <Route exact path='/responsive' element={< Responsive />}></Route>
          <Route exact path='/iterative' element={< Iterative />}></Route>
          <Route exact path='/development' element={< Development />}></Route>
      </Routes>
	</HashRouter>
  </div>
);
}
}

export default App;
