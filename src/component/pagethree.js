import React, { Component } from 'react';
import * as bstarp from 'react-bootstrap';
import {Link} from 'react-router';


export default class Pagethree extends Component {
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
              <li className="backIcon">
              <Link to="/" > <img src={require('../images/back-icon.png')} alt={'img'} /></Link>
              </li>

              <li className="pastBills">
                <h3>
                Past Bills
                </h3>
              </li>
              </ul>
              <div className="details">
                  <bstarp.Row>
                      <bstarp.Col md={8} className="pad0">
                      <div className="tabImg">
                      <img src={require('../images/icon.jpg')} alt={'img'}/>
                      </div>
                         <div className="tabContent">
                           <h4>
                            Deepas malabar kitchen
                           </h4>
                           <p className="kitchenAmt">
                            Paid:<span>2344</span>
                           </p>
                         </div>

                      </bstarp.Col>
                    </bstarp.Row>
               </div>
               <div className="details">
                   <bstarp.Row>
                       <bstarp.Col md={8} className="pad0">
                    <Link to="/one" >   <div className="tabImg">
                       <img src={require('../images/icon.jpg')} alt={'img'}/>
                       </div>
                          <div className="tabContent">
                            <h4>
                             Deepas malabar kitchen
                            </h4>
                            <p className="kitchenAmt">
                             Paid:<span>2344</span>
                            </p>
                          </div></Link>

                       </bstarp.Col>
                     </bstarp.Row>
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
