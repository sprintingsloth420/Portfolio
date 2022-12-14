import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import Navbar from './pages/Navbar.js';
import About from './pages/About.js';
// import Contact from './pages/contact';

// source: https://www.geeksforgeeks.org/reactjs-router/
class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
      <Navbar/>
      <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          {/* <Route exact path='/contact' element={< Contact />}></Route> */}
      </Routes>
		</div>
	</Router>
);
}
}

export default App;
