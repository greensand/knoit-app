import React, { Component } from 'react';
import * as Bootstrap from 'react-bootstrap';
import {Link} from 'react-router';
import {browserHistory } from 'react-router';
import VerificationForm from './verification_form.js';
export default class Verfication extends Component
{
    constructor(props)
    {
        super(props);
        this.redirectTo=this.redirectTo.bind(this);
    }
    redirectTo()
    {
        browserHistory.push('/option');
    }
    render()
    {

        return (
            <Bootstrap.Col className="container-fluid">
            <Bootstrap.Row className="show-grid">
            
            <Bootstrap.Col xs={12} sm={5} md={4} className="padding0">
            
            <Bootstrap.Col className="app-screen ">
             <Bootstrap.Col  className="back-icon">
                <Link to = '/'><img src={require('../images/icons/back-icon.png')}/></Link>
             </Bootstrap.Col>
             <h4 className="knoit_heading">KNOIT</h4>
            <Bootstrap.Col className="verification">
            <Bootstrap.Col className="verification-item">
               <p className="labelling">VERIFY YOUR MOBILE NUMBER</p>
               <VerificationForm/>
                
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