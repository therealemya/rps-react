import React, { Component } from 'react';
import LoginButton from '../ButtonContainer/LoginButton';
import SignupButton from '../ButtonContainer/SignupButton';

function Welcome(){

    
            return(
                <div className="welcome">
                <h1>Welcome To The App</h1>
                <LoginButton />
                <SignupButton />
                </div>
            );

   

}

export default Welcome;