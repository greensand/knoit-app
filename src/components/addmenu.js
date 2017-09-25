import React, { Component } from 'react';
import { Col,Tab,Grid,Row,Nav,NavItem,Form,FormGroup,ControlLabel,FormControl,Button} from 'react-bootstrap';
import profile from '../images/profile.jpg';
import latha from '../images/latha.jpg';
import splashscreen from '../images/bgimage.jpg';

export default class Addmenu extends Component {
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
                <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col sm={12}>
                      <FormControl type="text" placeholder="Add menu title" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={12}>
                      <Button type="submit" onClick={this.ongraph.bind(this)}>
                        Add
                      </Button>
                    </Col>
                  </FormGroup>
              </Form>
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
