import React, { Component } from 'react';
import './App.css';
import Pageone from './component/pageone.js';
import Pagetwo from './component/pagetwo.js';
import Pagethree from './component/pagethree.js';
import Pagefour from './component/pagefour.js';

class App extends Component {
  render() {
    return (
    <div>
      {
        this.props.children
      }
    </div>
    );
  }
}

export default App;
