import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


export default class LoginButton extends Component{

    render(){
    const Button = withRouter(({history}) => (
        <button 
        type="button" 
        class="btn btn-outline-primary"
        onClick={() => {history.push('/login')}}
        > Login </button>
    ));


    return <Button />    
    
    }
}