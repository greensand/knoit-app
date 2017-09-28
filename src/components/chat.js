import React, { Component } from 'react';
import { Form,FormGroup,Col,ControlLabel,FormControl,Checkbox,Button,Grid,Row} from 'react-bootstrap';
import profile from '../images/profile.jpg';
import latha from '../images/latha.jpg';
import {connect} from 'react-redux';

class Chat extends Component {

  render() {
    const {x,y} = this.props;
    return (
      <Col sm={12} className="pad-0">
      <div className="chat-menu">
        <div className="profile-img">
              <img src={profile} alt="profile" />
        </div>
        <div className="chat-description">
            <h5>Sweet Something</h5>
            {this.props.x}
            <p>5 choco</p>
        </div>
      </div>
      <div className="chat-menu">
        <div className="profile-img">
              <img src={profile} alt="profile" />
        </div>
        <div className="chat-description">
            <h5>Sweet Something</h5>
            <p>5 choco</p>
        </div>
      </div>
      <div className="chat-menu">
        <div className="profile-img">
              <img src={profile} alt="profile" />
        </div>
        <div className="chat-description">
            <h5>Sweet Something</h5>
            <p>5 choco</p>
        </div>
      </div>
      <div className="chat-menu">
        <div className="profile-img">
              <img src={profile} alt="profile" />
        </div>
        <div className="chat-description">
            <h5>Sweet Something</h5>
            <p>5 choco</p>
        </div>
        </div>
      <div className="contact-list">
          <h4>CONTACTS</h4>
          <div className="contact-names">
              <img src={latha} alt="latha" />
              <p>Appy</p>
          </div>
          <div className="contact-names">
              <img src={latha} alt="latha" />
              <p>Nithin</p>
          </div>
          <div className="contact-names">
              <img src={latha} alt="latha" />
              <p>Latha</p>
          </div>
          <div className="contact-names">
              <img src={latha} alt="latha" />
              <p>Latha</p>
          </div>
      </div>
      </Col>
    );
  }
}

function mapStateToProps(state) {
	return {
		x:state.x,
    y:state.y
	};
}

function mapDispatchToProps(dispatch){
  return {
  inc:() => {
       dispatch({
         type:'INC'
       });
   },
   dec:()=>{
     dispatch({
       type:'DEC'
     })
   }
 }
}

Chat  = 	connect(mapStateToProps,mapDispatchToProps)(Chat);
export default Chat;
