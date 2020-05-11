import React from 'react';
import { withRouter } from 'react-router-dom';


function TermsButton(){
    const Button = withRouter(({history}) => (
        <button 
        type="button"
        className="btn btn-link" 
        onClick={() => {history.push('/terms')}}
        > Terms and Conditions </button>
    ));


    return <Button />    
    

}

export default TermsButton;