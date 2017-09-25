import React, { Component } from 'react';
import { Col,Tab,Grid,Row,Nav,NavItem} from 'react-bootstrap';
import profile from '../images/profile.jpg';
import latha from '../images/latha.jpg';
import Addmenu from '../components/addmenu.js'
import splashscreen from '../images/bgimage.jpg';
import like from '../images/like.svg';
import nithin from '../images/nithin.jpg';



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
        <Col sm={12} className="pad-0">
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
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          Bills
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
        <div className="chat-menu">
          <div className="profile-img">
                <img src={profile} alt="profile" />
          </div>
          <div className="review-content">
              <div className="review-description">
                  <h5>Nithin  Kumar</h5>
                  <p>Apple Crumble</p>
                  <div className="facebook-icons">
                    <ul>
                      <li>Like<span></span></li>
                      <li>Reply<span></span></li>
                      <li>  <img src={like} alt="like" />10</li>
                    </ul>
                  </div>
                  <div className="replies">
                      <p>View 2 previous replies</p>
                      <div className="profile-img">
                            <img src={nithin} alt="nithin" />
                      </div>
                      <div className="review-content">
                          <div className="review-description">
                              <h5>Nithin  Kumar<span> Very true....</span></h5>
                              <div className="facebook-icons">
                                <ul>
                                  <li>Like<span></span></li>
                                  <li>Reply<span></span></li>
                                  <li><img src={like} alt="like" />10</li>
                                </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>

          </div>
          <div className="chat-menu">
            <div className="profile-img">
                  <img src={profile} alt="profile" />
            </div>
            <div className="review-content">
                <div className="review-description">
                    <h5>Nithin  Kumar</h5>
                    <p>Apple Crumble</p>
                    <div className="facebook-icons">
                      <ul>
                        <li>Like<span></span></li>
                        <li>Reply<span></span></li>
                        <li>  <img src={like} alt="like" />10</li>
                      </ul>
                    </div>
                    <div className="replies">
                        <p>View 2 previous replies</p>
                        <div className="profile-img">
                              <img src={nithin} alt="nithin" />
                        </div>
                        <div className="review-content">
                            <div className="review-description">
                                <h5>Nithin  Kumar<span> Very true....</span></h5>
                                <div className="facebook-icons">
                                  <ul>
                                    <li>Like<span></span></li>
                                    <li>Reply<span></span></li>
                                    <li><img src={like} alt="like" />10</li>
                                  </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            </div>
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
