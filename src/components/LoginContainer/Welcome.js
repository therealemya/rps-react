import React, { Component } from 'react';
import LoginButton from '../ButtonContainer/LoginButton';
import SignupButton from '../ButtonContainer/SignupButton';
import logolite from '../../images/logolite.png';


export default class Welcome extends Component {
    render() {

        return (
            <div className="welcome">

                <h1>Welcome</h1>
                <p><b>A World Wide Game Of FUN!!</b></p>

                <div>
                    <img src={logolite} alt="logo" className="welcomelogo" />
                </div>

                <br />

                <div className="buttons">
                    <LoginButton />
                    <SignupButton />
                </div>


            </div>
        );



    }
}
