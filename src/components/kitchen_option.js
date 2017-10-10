import React, { Component } from 'react';
import * as Bootstrap from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchKitchenDetails} from '../actions/index';
class KitchenName extends Component
{
  render()
  {
    const KitchenName = this.props.kitchen_details.map((name)=>{
         return (
             <option value={name.id}>{name.title}</option>
         )
     });
      return(
          {KitchenName}
            );
  }
}
function mapStateToProps(state)
{
  return {kitchen_details:state.kitchen_details.all};
}
export default connect (mapStateToProps,{fetchKitchenDetails})(KitchenName);
// export const KitchenBlock = function()
// {
//
//         return(
//             <Bootstrap.FormControl componentClass="select" placeholder="select">
//                 <option value="select">Oak</option>
//                 <option value="other">...</option>
//             </Bootstrap.FormControl>
//         );
//
// }
// export const KitchenWing = function()
// {
//
//         return(
//             <Bootstrap.FormControl componentClass="select" placeholder="select">
//                 <option value="select">C</option>
//                 <option value="other">...</option>
//             </Bootstrap.FormControl>
//         );
//
// }
// export const KitchenFlatNo = function()
// {
//
//         return(
//             <Bootstrap.FormControl componentClass="select" placeholder="select">
//                 <option value="select">2004</option>
//                 <option value="other">...</option>
//             </Bootstrap.FormControl>
//         );
//
// }
