import React, { Component } from 'react';
import { Form,FormGroup,Col,ControlLabel,FormControl,Checkbox,Button,Grid,Row} from 'react-bootstrap';
import user from '../images/user.jpeg';
import call_icon from '../images/call-icon.png';
import splashscreen from '../images/bgimage.jpg';
import chat_icon from '../images/chat-icon.png';


export default class Something extends Component {

  render() {
    return (
      <section className="ask-question">
        <Grid>
          <Row>
             <Col lg={5} md={5} sm={5} xs={12} >
               <div className="user">
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
