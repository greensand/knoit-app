import React, { Component } from 'react';
import { Link } from 'react-router';
import * as Bootstrap from 'react-bootstrap';
import {browserHistory } from 'react-router';
export default class Frontpage extends Component
{
    constructor()
    {
        super();
        this.redirectTo=this.redirectTo.bind();
    }
    redirectTo()
    {
        browserHistory.push('/verification');
    }
    render()
    {
        return(
            <Bootstrap.Col className="container-fluid">
            <Bootstrap.Row className="show-grid">
            
            <Bootstrap.Col xs={12} sm={5} md={4} className="padding0">
            
            <Bootstrap.Col className="app-screen ">
             
            <Bootstrap.Col className="app-content clearfix">
            <Bootstrap.Col className="front_page">
                <h4 className="knoit_heading">KNOIT</h4>
                <Bootstrap.Col className="app-para"> 
                <p>Know about what is happening </p><p>in your Community</p>
                </Bootstrap.Col>

                <Bootstrap.Col className="social_Buttons">
                    <Bootstrap.Button onClick={this.redirectTo}><span><img src={require('../images/icons/facebook-icon.png')}/></span>CONNECT WITH FACEBOOK</Bootstrap.Button>
                    <Bootstrap.Button><span><img src={require('../images/icons/google-icon.png')}/></span>CONNECT WITH GOOGLE</Bootstrap.Button>
                </Bootstrap.Col> 
            </Bootstrap.Col>
            </Bootstrap.Col>
            </Bootstrap.Col>
            </Bootstrap.Col>
            <Bootstrap.Col xsHidden sm={7} md={8} className="padding0">
                <img className="imgbanner" src={require('../images/food-banner.jpg')}/>
            </Bootstrap.Col>
        </Bootstrap.Row>
    </Bootstrap.Col>
           
        )
    }
}