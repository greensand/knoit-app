import React, { Component } from 'react';
import * as Bootstrap from 'react-bootstrap';
import {Link} from 'react-router';
export default class Option extends Component
{
    render()
    {
        return (
            <Bootstrap.Col className="container-fluid">
            <Bootstrap.Row className="show-grid">
            
            <Bootstrap.Col xs={12} sm={5} md={4} className="padding0">
            
            <Bootstrap.Col className="app-screen ">
            <Link to = '/'><Bootstrap.Col  className="back-icon">
                <img src={require('../images/icons/back-icon.png')}/>
             </Bootstrap.Col></Link>
             <h4 className="knoit_heading">KNOIT</h4>
            <Bootstrap.Col className="app-category">
            <Link to ="/kitchen"><Bootstrap.Col className="app-item">
            <img  src={require('../images/icons/buyer-icon.png')}/>
            <p>I AM A BUYER</p>
            </Bootstrap.Col></Link>
            <Bootstrap.Col className="app-item">
            <img  src={require('../images/icons/chef-icon.png')}/>
            <p>I AM A CHEF</p>
            </Bootstrap.Col>
               
            </Bootstrap.Col>
            </Bootstrap.Col>
            </Bootstrap.Col>
            <Bootstrap.Col xsHidden sm={7} md={8} className="padding0">
                <img className="imgbanner" src={require('../images/food-banner.jpg')}/>
            </Bootstrap.Col>
        </Bootstrap.Row>
    </Bootstrap.Col>
        );
    }
}