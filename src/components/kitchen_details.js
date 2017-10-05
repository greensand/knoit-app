import React, { Component } from 'react';
import * as Bootstrap from 'react-bootstrap';

import {connect} from 'react-redux';
import {browserHistory,Link } from 'react-router';
import {fetchKitchenDetails} from '../actions/index';
class Kitchen extends Component
{
     constructor()
      {
          super();
          this.redirectTo=this.redirectTo.bind();
      }
      componentWillMount()
      {
          this.props.fetchKitchenDetails();
      }
      redirectTo()
      {
          browserHistory.push('/find_dishes');
      }
      
      render(){
        if(!this.props.kitchen_details)
            {
                return <div>No Data yet</div>
            }
           const KitchenName = this.props.kitchen_details.map((name)=>{
                return (
                    <option value={name.id}>{name.title}</option>
                )
            });
            const KitchenBlock = this.props.kitchen_details.map((name)=>{
                return (
                    <option value={name.id}>{name.Block}</option>
                )
            });
            const KitchenWing = this.props.kitchen_details.map((name)=>{
                return (
                    <option value={name.id}>{name.Wing}</option>
                )
            });
            const KitchenFlatNo = this.props.kitchen_details.map((name)=>{
                return (
                    <option value={name.id}>{name.FlatNo}</option>
                )
            });
               
        
        return (
               <Bootstrap.Col className="container-fluid">
                        <Bootstrap.Row className="show-grid">

                        <Bootstrap.Col xs={12} sm={5} md={4} className="padding0">

                        <Bootstrap.Col className="app-screen ">
                         <Link to = '/option'><Bootstrap.Col  className="back-icon">
                            <img src={require('../images/icons/back-icon.png')}/>
                         </Bootstrap.Col></Link>
                         <h4 className="knoit_heading">KNOIT</h4>
                        <Bootstrap.Col className="app-content">
                            <form>
                                <Bootstrap.FormGroup>
                                    <Bootstrap.ControlLabel>Kitchen Name</Bootstrap.ControlLabel>
                                    <Bootstrap.FormControl componentClass="select" placeholder="select">
                                        <option value="">Select Kitchen</option>
                                        {KitchenName}
                                        </Bootstrap.FormControl>
                                    </Bootstrap.FormGroup>
                                <Bootstrap.FormGroup>
                                    <Bootstrap.ControlLabel>Block</Bootstrap.ControlLabel>
                                    <Bootstrap.FormControl componentClass="select" placeholder="select">
                                        <option value="">Select Block</option>
                                        {KitchenBlock}
                                        </Bootstrap.FormControl>
                                </Bootstrap.FormGroup>
                                <Bootstrap.FormGroup>
                                    <Bootstrap.ControlLabel>Wing</Bootstrap.ControlLabel>
                                    <Bootstrap.FormControl componentClass="select" placeholder="select">
                                        <option value="">Select Wing</option>
                                        {KitchenWing}
                                        </Bootstrap.FormControl>
                                </Bootstrap.FormGroup>
                                    <Bootstrap.FormGroup>
                                    <Bootstrap.ControlLabel>Flat No.</Bootstrap.ControlLabel>
                                    <Bootstrap.FormControl componentClass="select" placeholder="select">
                                        <option value="">Select Flat No.</option>
                                        {KitchenFlatNo}
                                        </Bootstrap.FormControl>
                                </Bootstrap.FormGroup>
                                <Bootstrap.FormGroup>
                                    <Bootstrap.Button onClick={this.redirectTo} type="submit"  className="btn-primary form-control">Continue</Bootstrap.Button>
                                </Bootstrap.FormGroup>
                            </form>
                        </Bootstrap.Col>
                        </Bootstrap.Col>
                        </Bootstrap.Col>
                        <Bootstrap.Col xsHidden sm={7} md={8} className="padding0">
                            <img className="imgbanner " src={require('../images/food-banner.jpg')}/>
                        </Bootstrap.Col>
                    </Bootstrap.Row>
                </Bootstrap.Col>
        );
    }
}
function mapStateToProps(state)
{
  return {kitchen_details:state.kitchen_details.all};
}
export default connect (mapStateToProps,{fetchKitchenDetails})(Kitchen);
