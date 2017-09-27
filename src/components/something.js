import React, { Component } from 'react';
import { Form,FormGroup,Col,ControlLabel,FormControl,Checkbox,Button,Grid,Row} from 'react-bootstrap';
import user from '../images/user.jpeg';
import call_icon from '../images/call-icon.png';
import splashscreen from '../images/bgimage.jpg';
import chat_icon from '../images/chat-icon.png';
import back_icon from '../images/back-icon.png';
import apple_crumble from '../images/apple-crumble.jpg';

export default class Something extends Component {

  render() {
    return (
      <section className="ask-question">
        <Grid>
          <Row>
             <Col lg={5} md={5} sm={5} xs={12} >
               <div className="user">
                  <div className="back-icon">
                     <img  src={back_icon} alt="back-icon" />
                  </div>
                   <img src={user} alt="user-img" />
                   <p>Sweet Somethings</p>
                   <div className="call-icon">
                       <img src={chat_icon} alt="chat-img" />
                       <img src={call_icon} alt="call-img" />
                   </div>
               </div>
               <div className="chat-descri chat-user">
                   <img src={user} alt="user-img" />
                   <p>Sweet Somethings</p>
               </div>
               <div className="food-item">
                   <img src={apple_crumble} alt="apple-crumble-img" />
                   <h5>Todays special</h5>
                   <p>Apple</p>
                  <p>Orange</p>
                  <p>Oreo</p>
                  <p>Mango Milk Shake</p>
               </div>
             </Col>
             <Col lg={7} md={7} sm={7} xs={12} >
               <div className="banner-img">
                   <img src={splashscreen}  alt="splashscreen" />
               </div>
             </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
