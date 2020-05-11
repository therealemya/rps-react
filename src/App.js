import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
//Importing Login Features
import Welcome from './components/LoginContainer/Welcome';
import Login from './components/LoginContainer/Login';
import Signup from './components/LoginContainer/Signup';
import Terms from './components/CustomContainer/Terms';

function App() {

    
        return (
            <Router>
                <div className="App">

                <Route exact path='/' component={Welcome} />
                <Route path='/welcome' component={Welcome} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/terms' component={Terms} />
                {/* <Route path='/user' component={UserHome} />
                <Route path='/user/stats' component={UserStats} />
                <Route path='/user/donation' component={Donation} /> */}

                </div>
            </Router>
        );
    
}

export default App;