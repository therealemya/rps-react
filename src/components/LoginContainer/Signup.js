import React, { Component } from 'react';
import LoginButton from '../ButtonContainer/LoginButton';
import CancelButton from '../ButtonContainer/CancelButton';


function Signup(){

    
            return(
                <div className="signup">
                <h1>This is the Signup Screen</h1>
                <LoginButton />
                <CancelButton />
                </div>
            );

    

}

export default Signup;