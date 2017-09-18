import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import Editprofile from './components/editprofile.js';
import Something from './components/somethings.js';
import Menu from './components/menu.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
<Something/>
           <Menu/>
             <Editprofile/>
          </div>
      </div>
    );
  }
}

export default App;
