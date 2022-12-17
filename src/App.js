import React, { Component } from 'react';
import { HashRouter,Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/Home.js';
// import Navbar from './pages/Navbar.js';
// import About from './pages/About.js';
// import Art from './pages/Art.js';
// import Persona from './pages/Persona.js';
// import Responsive from './pages/Responsive.js';
// import Iterative from './pages/Iterative.js';
// import Development from './pages/Development.js';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import About from './pages/About';
import Art from './pages/Art';
import Persona from './pages/Persona';
import Responsive from './pages/Responsive';
import Iterative from './pages/Iterative';
import Development from './pages/Development';

// source: https://www.geeksforgeeks.org/reactjs-router/
class App extends Component {
render() {
	return (
    <div className="App">
	<HashRouter>
      <Navbar/>
      <Routes>
          {/* <Route exact path='/CS1300_Portfolio' element={< Home />}></Route>
          <Route exact path='CS1300_Portfolio/art' element={< Art />}></Route>
          <Route exact path='CS1300_Portfolio/persona' element={< Persona />}></Route>
          <Route exact path='CS1300_Portfolio/responsive' element={< Responsive />}></Route>
          <Route exact path='CS1300_Portfolio/iterative' element={< Iterative />}></Route>
          <Route exact path='CS1300_Portfolio/development' element={< Development />}></Route> */}
          <Route path='/' element={< Home />}></Route>
          <Route path='/art' element={< Art />}></Route>
          <Route path='/persona' element={< Persona />}></Route>
          <Route path='responsive' element={< Responsive />}></Route>
          <Route path='/iterative' element={< Iterative />}></Route>
          <Route path='/development' element={< Development />}></Route>
      </Routes>
	</HashRouter>
  </div>
);
}
}

export default App;
