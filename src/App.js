import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import GoAuto from './GoAuto.js'
import Footer from './Footer.js'

function App() {
  return (
    <div className="App">
     <HashRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <GoAuto />
      <Footer />
	  </HashRouter>
    </div>
  );
}

export default App;
