import React, { Component } from 'react';
import { Col,Tab,Grid,Row,Nav,NavItem} from 'react-bootstrap';

export default class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      key: 'first'
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
   handleSelect(key) {
     this.setState({key:key});
   }
  render() {
    return (
      <section className="chef-menu">
      <Grid>
      <Row>
       <div className="chef">
       <Tab.Container  id="left-tabs-example" defaultActiveKey={this.state.key} onSelect={this.handleSelect}>
    <Row className="clearfix">
    <Col sm={12}>

    <Nav bsStyle="pills" >
        <NavItem eventKey="first">
          CHATS
        </NavItem>
        <NavItem eventKey="second">
          MENU
        </NavItem>
        <NavItem eventKey="third">
          BILLS
        </NavItem>
        <NavItem eventKey="fourth">
          REVIEWS
        </NavItem>
        <NavItem eventKey="fifth">
          ABOUT ME
        </NavItem>
    </Nav>
      </Col>
      <Col sm={6}>
      <div className="content-holder">
      <Tab.Content animation>
        <Tab.Pane eventKey="first">
      Chats
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <div className="menu-holder">
          <Col sm={6} className="pad-0">
            <p>Todays Special</p>
            <ul>
              <li>Apple Crumble</li>
              <li>Oreo Cheese Cake</li>
              <li>Mango Milk Shake</li>
            </ul>
          </Col>
          <Col sm={3} className="pad-0">
            <p>Price</p>
            <ul>
              <li>250</li>
              <li>150</li>
              <li>180</li>
            </ul>
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
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          Bills
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
          Reviews
        </Tab.Pane>
        <Tab.Pane eventKey="fifth">
          About me
        </Tab.Pane>
      </Tab.Content>
      </div>

      </Col>
    </Row>
   </Tab.Container>
       </div>
      </Row>
      </Grid>
      </section>
    );
  }
}
