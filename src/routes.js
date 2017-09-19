import React from 'react';
import {Route , IndexRoute} from 'react-router';

import App from './App';
import Menu from './components/menu.js';
import Editprofile from './components/editprofile.js';
import Addmenu from './components/addmenu.js';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Menu} />
    <Route path="/edit" component={Editprofile} />
    <Route path="/addmenu" component={Addmenu} />
  </Route>
);
