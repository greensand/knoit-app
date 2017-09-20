import React, { Component } from 'react';
import * as bstarp from 'react-bootstrap';
import {Link} from 'react-router';


export default class Pageone extends Component {
  render (){
    return(
      <div>
        <div className="knoitApp">

           <bstarp.Row className="show-grid">
          <bstarp.Col xs={12} md={5} className="pad0">
            <div className="leftApp">
            <div className="head">
              <h2>
              KNOIT
              </h2>
            </div>
              <ul>
              <li className="back">
              <Link to="/three" >   <img src={require('../images/back-icon.png')} alt={'img'} /></Link>
              </li>
              <li className="icon">
                <img src={require('../images/icon.jpg')} alt={'img'}/>
              </li>
              <li>
                <h3>
                  Sweet Somethings
                </h3>
              </li>
              </ul>
              <div className="details">
                 <bstarp.Row>
                     <bstarp.Col  md={8} className="pad0">
                       <h4>
                         2 Apple Crumble
                       </h4>
                       <p>
                         17 June, 2017
                       </p>
                     </bstarp.Col>
                    <bstarp.Col md={4} className="pad0">
                      <h3>
                          ₹300
                      </h3>
                    </bstarp.Col>
                   </bstarp.Row>
              </div>
              <div className="details">
                 <bstarp.Row>
                     <bstarp.Col  md={8} className="pad0">
                       <h4>
                         1 oreo Cheese cake
                       </h4>
                       <p>
                         16 June, 2017
                       </p>
                     </bstarp.Col>
                    <bstarp.Col md={4} className="pad0">
                      <h3>
                          ₹200
                      </h3>
                    </bstarp.Col>
                   </bstarp.Row>
              </div>
              <div className="details">
                 <bstarp.Row>
                     <bstarp.Col  md={8} className="pad0">
                       <h4>
                         2 Milk Shake
                       </h4>
                       <p>
                         17 June, 2017
                       </p>
                     </bstarp.Col>
                    <bstarp.Col md={4} className="pad0">
                      <h3>
                          ₹400
                      </h3>
                    </bstarp.Col>
                   </bstarp.Row>
              </div>
              <div className="details">
                 <bstarp.Row>
                     <bstarp.Col  md={8} className="pad0">
                       <h4>
                         2 Apple Crumble
                       </h4>
                       <p>
                         17 June, 2017
                       </p>
                     </bstarp.Col>
                    <bstarp.Col md={4} className="pad0">
                      <h3>
                          ₹300
                      </h3>
                    </bstarp.Col>
                   </bstarp.Row>
              </div>
              <div className="total">
              <p>
                Total:
              </p>
              <h3>
                ₹800
              </h3>
              </div>
              <div className="input">
                <form>
                  <input type="text" placeholder="Say Hi" />
                </form>
              </div>
            </div>
          </bstarp.Col>
            <bstarp.Col xs={12} md={7} className="pad0">
          <div className="rightApp">
              <img src={require('../images/1.jpg')} alt={'img'} />
          </div>
          </bstarp.Col>
        </bstarp.Row>
        </div>
      </div>
    )
  }
}
