import React, { Component } from 'react';
import * as Bootstrap from 'react-bootstrap';
import {connect} from 'react-redux';

export default class AboutComment  extends Component
{
  render()
  {

      return(
        <div>
     <Bootstrap.Media>
      <Bootstrap.Media.Left>
        <img width={64} height={64} className="img-circle"  src= {require('../images/icons/profile.png')} alt="Image"/>
      </Bootstrap.Media.Left>
      <Bootstrap.Media.Body className="about-comment">
        <Bootstrap.Media.Heading >Saurav</Bootstrap.Media.Heading>
        <p className="small-paragraph">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        <Bootstrap.Media>
          <Bootstrap.Media.Left>
            <img width={64} height={64} className="img-circle" src= {require('../images/icons/profile.png')} alt="Image"/>
          </Bootstrap.Media.Left>
          <Bootstrap.Media.Body>
            <Bootstrap.Media.Heading>Priyanka</Bootstrap.Media.Heading>
            <p className="small-paragraph">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          </Bootstrap.Media.Body>
        </Bootstrap.Media>
      </Bootstrap.Media.Body>
    </Bootstrap.Media>

  </div>
            );
  }
}
