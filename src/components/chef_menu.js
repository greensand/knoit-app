import React, { Component } from 'react';
import { Form,FormGroup,Col,ControlLabel,FormControl,Checkbox,Button,Grid,Row} from 'react-bootstrap';
import profile from '../images/profile.jpg';
import latha from '../images/latha.jpg';
import {connect} from 'react-redux';

class Chef_menu extends Component {

  render() {
    const {z} = this.props;
    return (
      <div className="menu-holder">
        <Col sm={6} className="pad-0">
          <p>Todays Special</p>
          <ul>
            <li>Apple Crumble</li>
            <li>Oreo Cheese Cake</li>
            <li>Mango Milk Shake</li>
              <li>{this.props.z}</li>
          </ul>
          <div className="order">
            <p>Order before</p>
            <h6>7 PM</h6>
          </div>
        </Col>
        <Col sm={3} className="pad-0">
          <p>Price</p>
          <ul>
            <li>250</li>
            <li>150</li>
            <li>180</li>
          </ul>
          <div className="order">
            <p>Delivers between</p>
            <h6>6 PM-7 PM</h6>
          </div>
        </Col>
        <Col sm={3} className="pad-0">
          <p>Quantity</p>
          <ul>
            <li>7/17</li>
            <li>10/20</li>
            <li>5/6</li>
          </ul>
        </Col>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		z:state.z
	};
}
function mapDispatchToProps(dispatch){
  return {
  updatedata:() => {
       dispatch({
         type:'UPDTEDATA'
       });
    }
 }
}

Chef_menu  = 	connect(mapStateToProps,mapDispatchToProps)(Chef_menu);
export default Chef_menu;
