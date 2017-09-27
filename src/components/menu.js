import React, { Component } from 'react';
import { Col,Tab,Grid,Row,Nav,NavItem} from 'react-bootstrap';
import Addmenu from '../components/addmenu.js'
import Chat from '../components/chat.js'
import Chef_menu from '../components/chef_menu.js'
import Review from '../components/review.js'
import profile from '../images/profile.jpg';
import latha from '../images/latha.jpg';
import splashscreen from '../images/bgimage.jpg';




export default class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      key: 'first',
      initial : 'hai',
    };
    this.handleSelect = this.handleSelect.bind(this);
     this.changeState = this.changeState.bind(this);
  }
  changeState(value){
  this.setState(
    {initial : value}
  );
  console.log(this.state.initial);
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
    <Col lg={5} md={5} sm={5} xs={12} className="pad-0">

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
      <Col sm={12} className="pad-0">
      <div className="content-holder">
      <Tab.Content animation>
        <Tab.Pane eventKey="first">
          <Chat/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <Chef_menu/>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          Bills
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
           <Review/>
        </Tab.Pane>
        <Tab.Pane eventKey="fifth">
          About me
        </Tab.Pane>
      </Tab.Content>
      </div>
      </Col>

      </Col>
      <Col className="pad-0" lg={7} md={7} sm={7} xs={12}>
      <div className="banner-img">
          <img src={splashscreen}  alt="splashscreen" />
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
