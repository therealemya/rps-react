import React, { Component } from 'react';
import LoginButton from '../ButtonContainer/LoginButton';
import SignupButton from '../ButtonContainer/SignupButton';
import logolite from '../../images/logolite.png';
import MyAmplifyTheme from '../../MyAmplifyTheme';
import {Link} from 'react-router-dom';

export default class Welcome extends Component {
    render() {

        return (
            <div className="welcome">
                <div className="welcome-info">
                <h1>Welcome</h1>
                <h5>A World Wide Game Of FUN!!</h5>

                <div>
                    <img src={logolite} alt="logo" className="welcomelogo" />
                </div>

                <br />

                <div class="btn-group" id="login-btn-group" role="group">
                    {/* <button type="button" className="btn btn-primary enter">Enter</button> */}
                    <Link to="/user" id="user-home-link"><button>Enter</button></Link>
                </div>
                </div>


            </div>
        );



    }
}


