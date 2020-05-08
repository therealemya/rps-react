import React from 'react';
import { withRouter } from 'react-router-dom';


function LogoutButton(){
    const Button = withRouter(({history}) => (
        <button 
        type="button" 
        onClick={() => {history.push('/login')}}
        > Logout </button>
    ));


    return <Button />    
    

}

export default LogoutButton;