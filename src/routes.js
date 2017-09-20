import { Router, Route,IndexRoute, browserHistory } from 'react-router'
import App from './App.js';
import Pageone from './component/pageone.js';
import Pagetwo from './component/pagetwo.js';
import Pagethree from './component/pagethree.js';
import React, { Component}  from 'react';

export default (
     <Route path="/" component={App}>
      <IndexRoute  component = {Pagetwo}/>
      <Route path="one" component={Pageone}></Route>
      <Route path="three" component={Pagethree}></Route>
     </Route>
);
