import React, { Component } from 'react';
import { Form,FormGroup,Col,ControlLabel,FormControl,Checkbox,Button,Grid,Row} from 'react-bootstrap';
import like from '../images/like.svg';
import nithin from '../images/nithin.jpg';
import profile from '../images/profile.jpg';

export default class Review extends Component {

  render() {
    return (
    <Grid>
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
    </Grid>
    );
  }
}
