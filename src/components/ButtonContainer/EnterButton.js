import React from 'react';
import { withRouter } from 'react-router-dom';


function EnterButton(){
    const Button = withRouter(({history}) => (
        <button       
        type="button" 
        onClick={() => {history.push('/user')}}
        > Enter </button>
    ));


    return <Button />    
    

}

export default EnterButton;