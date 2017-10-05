import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Col,Tab,Grid,Row,Nav,NavItem,Form,FormGroup,ControlLabel,FormControl,Button} from 'react-bootstrap';
import profile from '../images/profile.jpg';
import latha from '../images/latha.jpg';
import splashscreen from '../images/bgimage.jpg';
import edit_img from '../images/edit.png';
import add_img from '../images/add-img.png';
import cam from '../images/photo-camera.svg';

class Addmenu extends Component {
  ongraph(){
    this.props.changeValue("it is from button");
  }
  render() {
    return (
      <section className="somethings-menu">
      <Grid>
      <Row>
           <Col lg={5} md={5} sm={5} xs={12} >
           <div className="add-menu">
                <h2>Add Menu</h2>
            <div className="add-form">
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col sm={12}>
                  <div className="edit-holder">
                     <input onChange={()=>{this.props.updatedata()}} type="text" className="form-control" placeholder="Add menu title" />
                     <img src={edit_img} alt="edit-img" />
                 </div>
                </Col>
                <Col sm={12}>
                  <div className="quantity-holder">
                     <span>Quantity</span>
                     <button type="button" onClick={()=>{this.props.inc()}} >INC</button>
                     <button type="button" onClick={()=>{this.props.dec()}} >DEC</button>
                  </div>
                  <div className="menu-holder">
                     <input type="text" className="form-control" placeholder="Add item" />
                     <div className="rs-holder">
                         <img src={edit_img} alt="edit-img" />
                         <input type="number" className="form-control" placeholder="" />
                     </div>
                     <input type="text" onChange={()=>{this.props.inc()}} className="form-control quantity" placeholder="10" value={this.props.x} />
                 </div>
                 <div className="add-item">
                     <img src={add_img} alt="Add-img" />
                     Add item
                 </div>
                 <div className="add-photos">
                      <p>Add Photos</p>
                     <img src={cam} alt="cam" />
                 </div>
                 <div className="place-order">
                      <p>Order before</p>
                     <input type="number" className="form-control" placeholder="8 PM" />
                 </div>
                 <div className="deliver-time">
                      <p>Delivers between</p>
                     <input type="number" className="form-control" placeholder="8 PM" />
                     <input type="number" className="form-control" placeholder="9 PM" />
                 </div>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={12}>
                  <Button type="submit" onClick={this.ongraph.bind(this)}>
                    Publish
                  </Button>
                </Col>
              </FormGroup>
          </Form>
            </div>
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

function mapStateToProps(state) {
	return {
		x:state.x,
    y:state.y,
    z:state.z
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
   },
   updatedata:()=>{
     dispatch({
       type:'UPDTEDATA'
     })
   }
 }
}

Addmenu  = 	connect(mapStateToProps,mapDispatchToProps)(Addmenu);
export default Addmenu;
