import React, { Component } from 'react';
import LoginButton from '../ButtonContainer/LoginButton';
import CancelButton from '../ButtonContainer/CancelButton';


function Signup() {


    return (
        <div className="signup">
            <h1>Sign Up</h1>
            <form>
                <div className="form-group">
                    <label>Firstname:</label>
                    <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="form-group">
                    <label>Lastname:</label>
                    <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" className="form-control" placeholder="" />
                </div>
                **Username may not exceed 15 characters**
                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="text" className="form-control" placeholder="" />
                </div>
                **Password must at least contain 8 characters (must include Uppercase, Lowercase, Numbers, Special Characters)**
                </form>
                <LoginButton />
                <CancelButton />
                <a href="#">Terms and Conditions</a>
        </div>
        

    );



}

export default Signup;