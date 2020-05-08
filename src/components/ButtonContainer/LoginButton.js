import React from 'react';
import { withRouter } from 'react-router-dom';


function LoginButton(){
    const Button = withRouter(({history}) => (
        <button 
        type="button" 
        class="btn btn-outline-primary"
        onClick={() => {history.push('/login')}}
        > Login </button>
    ));


    return <Button />    
    

}

export default LoginButton;