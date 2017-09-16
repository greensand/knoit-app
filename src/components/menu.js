import React, { Component } from 'react';
import { Col,Tabs,Tab,Grid,Row} from 'react-bootstrap';
import splashscreen from '../images/splashscreen.png';



export default class Menu extends Component {

  render() {
    return (
      <section className="chef-menu">
      <Grid>
      <Row>
       <div className="chef">
       <Col lg={12} md={12} sm={12} xs={12} >
          <h2>Menu</h2>
          <Tabs>
           <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
           <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
           <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
         </Tabs>
       </Col>
       </div>
      </Row>
      </Grid>
      </section>
    );
  }
}
