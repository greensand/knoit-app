import React, { Component } from 'react';
import { Form,FormGroup,Col,ControlLabel,FormControl,Checkbox,Button,Grid,Row} from 'react-bootstrap';
import splashscreen from '../images/bgimage.jpg';

export default class Editprofile extends Component {

  render() {
    return (
      <section className="edit-profile">
      <Grid>
      <Row>
       <div className="profile">
       <Col lg={5} md={5} sm={5} xs={12} >
       <h2>Edit Profile</h2>
       <Form horizontal>
         <FormGroup controlId="formHorizontalEmail">
           <Col componentClass={ControlLabel} sm={12}>
             Kitchen Name
           </Col>
           <Col sm={12}>
             <FormControl type="text" placeholder="Add here" />
           </Col>
         </FormGroup>
         <FormGroup controlId="formHorizontalEmail">
           <Col componentClass={ControlLabel} sm={12}>
             Chef Name
           </Col>
           <Col sm={12}>
             <FormControl type="text" placeholder="Add here" />
           </Col>
         </FormGroup>
         <FormGroup controlId="formHorizontalEmail">
           <Col componentClass={ControlLabel} sm={12}>
             Cuisine
           </Col>
           <Col sm={12}>
             <FormControl type="text" placeholder="Add here" />
           </Col>
         </FormGroup>
         <FormGroup>
             <Checkbox>Veg</Checkbox>
             <Checkbox>Non Veg</Checkbox>
         </FormGroup>
         <FormGroup>
         <Col componentClass={ControlLabel} sm={12}>
           About Me
         </Col>
         <Col sm={12}>
           <FormControl componentClass="textarea" rows="5" type="text" placeholder="Add here" />
         </Col>
         </FormGroup>
         <FormGroup>
           <Col sm={12}>
             <Button bsSize="large" type="submit">
               Save
             </Button>
           </Col>
         </FormGroup>
     </Form>
       </Col>

      <Col lg={7} md={7} sm={7} xs={12} >
        <div className="banner-img">
            <img src={splashscreen}  alt="splashscreen" />
        </div>
      </Col>
        </div>
      </Row>

      </Grid>
      </section>
    );
  }
}
