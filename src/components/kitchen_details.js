import React, { Component } from 'react';
import * as Bootstrap from 'react-bootstrap';
import {KitchenName,KitchenBlock,KitchenWing,KitchenFlatNo} from './kitchen_option.js';
import {browserHistory,Link } from 'react-router';
export default class Kitchen extends Component
{

     constructor()
      {
          super();
          this.redirectTo=this.redirectTo.bind();
      }
      redirectTo()
      {
          browserHistory.push('/find_dishes');
      }
      render(){
        return (
               <Bootstrap.Col className="container-fluid">
                        <Bootstrap.Row className="show-grid">

                        <Bootstrap.Col xs={12} sm={5} md={4} className="padding0">

                        <Bootstrap.Col className="app-screen ">
                         <Link to = '/option'><Bootstrap.Col  className="back-icon">
                            <img src={require('../images/icons/back-icon.png')}/>
                         </Bootstrap.Col></Link>
                        <Bootstrap.Col className="app-content">
                            <form>
                                <Bootstrap.FormGroup>
                                    <Bootstrap.ControlLabel>Kitchen Name</Bootstrap.ControlLabel>
                                    <KitchenName/>
                                    </Bootstrap.FormGroup>
                                <Bootstrap.FormGroup>
                                    <Bootstrap.ControlLabel>Block</Bootstrap.ControlLabel>
                                    <KitchenBlock/>
                                </Bootstrap.FormGroup>
                                <Bootstrap.FormGroup>
                                    <Bootstrap.ControlLabel>Wing</Bootstrap.ControlLabel>
                                    <KitchenWing/>
                                </Bootstrap.FormGroup>
                                    <Bootstrap.FormGroup>
                                    <Bootstrap.ControlLabel>Flat No.</Bootstrap.ControlLabel>
                                    <KitchenFlatNo/>
                                </Bootstrap.FormGroup>
                                <Bootstrap.FormGroup>
                                    <Bootstrap.Button onClick={this.redirectTo} type="submit"  className="btn-primary form-control">Continue</Bootstrap.Button>
                                </Bootstrap.FormGroup>
                            </form>
                        </Bootstrap.Col>
                        </Bootstrap.Col>
                        </Bootstrap.Col>
                        <Bootstrap.Col xsHidden sm={7} md={8} className="padding0">
                            <img className="imgbanner " src={require('../images/food-banner.jpg')}/>
                        </Bootstrap.Col>
                    </Bootstrap.Row>
                </Bootstrap.Col>
        );
    }
}
