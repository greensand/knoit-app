import React from 'react';
import { Router, Route,IndexRoute, browserHistory } from 'react-router'
import App from './App.js';
import Front from './components/font-page';
import Kitchen from './components/kitchen_details.js';
import Option from './components/option.js';
import Verification from './components/verfication.js';
import DishDetails from './components/dishDetails.js';



export default (

     <Route path="/" component={App}>
        <IndexRoute  component = {Front}/>
         <Route path="/kitchen" component={Kitchen}/>
           <Route path="/option" component={Option}/>
         <Route path="/verification" component={Verification}/>
            <Route path="/find_dishes" component={DishDetails}/>
     </Route>


);
