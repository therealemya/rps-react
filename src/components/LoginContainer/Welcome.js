import React, { Component } from 'react';
import LoginButton from '../ButtonContainer/LoginButton';
import SignupButton from '../ButtonContainer/SignupButton';
import logolite from '../../images/logolite.png'

function Welcome() {


    return (
        <div className="welcome">
            <h1>Welcome</h1>
            <p><b>A World Wide Game Of FUN!!</b></p>
            <div>
                <img src={logolite} alt="logo" />
            </div>
            <div className="buttons">
                <LoginButton />
                <SignupButton />
            </div>
        </div>
    );



}

export default Welcome;