import React, { Component } from 'react';
import * as Bootstrap from 'react-bootstrap';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {browserHistory,Link } from 'react-router';

class VerificationForm extends Component{
    onSubmit()
    {
        browserHistory.push('/option');
    }
render()
{
    const { fields:{mobile_number}, handleSubmit } = this.props;
    return(
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>  
            <Bootstrap.FormControl type="number" {...mobile_number}/>
            <span className="inside-input">+91 -</span>
            <div className="text-help margin-bottom">
                    {mobile_number.touched ? mobile_number.error : ''}
            </div>
            <Bootstrap.Button type="submit" className="btn-primary button form-control">SUBMIT</Bootstrap.Button>
     </form>
    );
}
}
function validate(value)
{
   
    const errors={};
     if(!value.mobile_number)
        {
            errors.mobile_number = 'Enter your Mobile Number';
            
        }
        if(value.length<10 || value.length>10)
            {
                alert('i m active');
                errors.mobile_number = 'Enter Valid Mobile Number'; 
            }
        
    return errors;

}

export default reduxForm({
  form:'PostsNewForm',
  fields:['mobile_number'],
  validate
},null,null)(VerificationForm);