import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importing Login Features
import Welcome from './components/LoginContainer/Welcome';
import Login from './components/LoginContainer/Login';
import Signup from './components/LoginContainer/Signup';

//Importing User Features
import UserHome from './components/UserContainer/UserHome';
import UserStats from './components/UserContainer/UserStats';
import Donation from './components/CustomContainer/Donation';
import Terms from './components/CustomContainer/Terms';
import Rules from './components/CustomContainer/Rules';
import PVE from './components/GameContainer/PVE';

export default class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path='/' component={Welcome} />
                        <Route path='/welcome' component={Welcome} />
                        <Route path='/login' component={Login} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/terms' component={Terms} />
                        <Route exact path='/user' component={UserHome} />
                        <Route path='/user/rules' component={Rules} />
                        <Route path='/user/stats' component={UserStats} />
                        <Route path='/user/donation' component={Donation} />
                        <Route path='/user/pve' component={PVE} />
                    </Switch>
                </div>
            </Router>
        );
    }
}