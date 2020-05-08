import React from 'react';
import { withRouter } from 'react-router-dom';


function CancelButton(){
    const Button = withRouter(({history}) => (
        <button 
        type="button" 
        onClick={() => {history.push('/')}}
        > Cancel </button>
    ));


    return <Button />    
    

}

export default CancelButton;