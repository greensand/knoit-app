import React, { Component } from 'react';
import Kitchen from './components/kitchen_details';
import Frontpage from './components/font-page';
import Option from './components/option';
import Verification from './components/verfication';
import * as Bootstrap from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return (
     <div>
       { this.props.children}
      </div>

  );


  }
}

export default App;
