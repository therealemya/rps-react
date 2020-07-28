import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withAuthenticator} from 'aws-amplify-react';
import MyAmplifyTheme from '../../MyAmplifyTheme';



 class UserStats extends Component {
    constructor(props){
        super(props);
        this.state={
            playerWins: this.props.recordWins,
            playerLosses: this.props.recordLoss
        }
    }

    render() {
        return (
            <div className="userStats">
                <div className="return">
                    <Link to="/user"><button><i class="fas fa-arrow-alt-circle-left"></i></button></Link>
                </div>

                <br />

                <div className="user-header">
                    <h1><i class="fas fa-user-ninja"></i> Player</h1>
                    <br />
                </div>
                <div className="user-rank">
                    Ranking:
                    Lvl 25
                </div>

                <div className="user-stats-record">

                    <div className="win"> Wins: 
                    <br/> 
                    {this.state.playerWins}
                    </div>
                    <div className="loss"> Losses: 
                    <br/> 
                    {this.state.playerLosses}
                    </div>
                    

                </div>

                <br />


                <div className="achievements">
                    <p id="title">Achievements</p>
                    <div className="achievement-items">
                        <i class="fas fa-award"></i>
                        <i class="fas fa-medal"></i>
                        <i class="fas fa-crown"></i>
                        <i class="fas fa-trophy"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default withAuthenticator(UserStats, {
    theme: MyAmplifyTheme
});