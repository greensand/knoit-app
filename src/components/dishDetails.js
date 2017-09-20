import React, { Component } from 'react';
import * as Bootstrap from 'react-bootstrap';
import {Link} from 'react-router';
export default class DishDetails extends Component
{
  render()
  {
    return(
      <Bootstrap.Col className="container-fluid">
               <Bootstrap.Row className="show-grid">

               <Bootstrap.Col xs={12} sm={5} md={4} className="padding0">


               <Bootstrap.Col className="app-screen ">
               <Bootstrap.Row>

                <Bootstrap.Col xs={12} sm={12} md={12} className="padding0">
                <ul className="profile-content padding0">
                <li>
                <span>
                 <Link to = '/kitchen'><img src={require('../images/icons/back-icon.png')}/></Link>
                 </span>
                </li>
                    <li>
                        <span className="profile">
                           <img className="profile img-circle" src={require('../images/icons/profile.png')}/>
                        </span>
                    </li>
                     <li>
                        <span>Sweet Somethings</span>
                     </li>
                    <li className="pull-right">
                    <span>
                       <a href="#"><img className="profile" src={require('../images/icons/call-icon.png')}/></a>
                   </span>
                   </li>
                   <li className="pull-right">
                   <span>
                    <a href="#"><img className="profile" src={require('../images/icons/chat-icon.png')}/></a>
                   </span>
                  </li>
                </ul>
                <p>

                </p>
                </Bootstrap.Col>
                </Bootstrap.Row>
              <Bootstrap.Row>
              <Bootstrap.Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
      <Bootstrap.Row className="clearfix">
      <Bootstrap.Col className="panel-element">
        <Bootstrap.Col sm={12}>

          <Bootstrap.Nav bsStyle="tabs" className="panel-headings">
            <Bootstrap.NavItem eventKey="first">
              Chat
            </Bootstrap.NavItem>
            <Bootstrap.NavItem eventKey="second">
              <Bootstrap.Col className="content">
              Review
              </Bootstrap.Col>
            </Bootstrap.NavItem>
            <Bootstrap.NavItem eventKey="thrid">
             About
            </Bootstrap.NavItem>
          </Bootstrap.Nav>
        </Bootstrap.Col>
        <Bootstrap.Col sm={12}>
          <Bootstrap.Tab.Content animation>
            <Bootstrap.Tab.Pane eventKey="first">
              <Bootstrap.Col className="chat-content">
                  <Bootstrap.Row>
                     <Bootstrap.Col md={2} lg={2} sm={2} >
                        <Bootstrap.Col className="content-img">
                         <img className="profile img-circle" src={require('../images/icons/profile.png')}/>
                        </Bootstrap.Col>

                     </Bootstrap.Col>
                     <Bootstrap.Col md={10} lg={10} sm={10} >
                        <Bootstrap.Col className="name-content">
                         Sweet Somethings
                        </Bootstrap.Col>
                        <Bootstrap.Col className="big-image">
                          <img src={require('../images/food_iamges.jpg')}/>
                        </Bootstrap.Col>
                        <Bootstrap.Col className="dish-description">
                        <h3 className="dish_heading">Todays Special</h3>
                        <ul className="padding0">
                            <li>Apple and Blackburry crumble</li>
                            <li>Apple and Blackburry crumble</li>
                            <li>Apple and Blackburry crumble</li>
                            <li>Apple and Blackburry crumble</li>
                            <li>Apple and Blackburry crumble</li>
                       </ul>
                       <p>Order Before 7PM</p>

                        </Bootstrap.Col>
                        <Bootstrap.Button className="btn-primary form-control">ORDER</Bootstrap.Button>


                     </Bootstrap.Col>
                  </Bootstrap.Row>
              </Bootstrap.Col>
            </Bootstrap.Tab.Pane>

          </Bootstrap.Tab.Content>
        </Bootstrap.Col>
        </Bootstrap.Col>

      </Bootstrap.Row>
    </Bootstrap.Tab.Container>
              </Bootstrap.Row>
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
