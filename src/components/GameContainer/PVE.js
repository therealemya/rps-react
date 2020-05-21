import React, { Component } from 'react';
import ExitGameButton from '../ButtonContainer/ExitGameButton';
import rock from '../../images/rock.png';
import paper from '../../images/paper.png';
import scissors from '../../images/scissors.png';


export default class PVE extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerChoice: "rock",
            computerChoice: "",
            result: "",
            playerWins: 0,
            enemyWins: 0
        }
    }

   
    //Player Choice Function
    playerAction = (e) => {        
        this.setState({
            playerChoice: e.target.value
        })
    }  

    //Game Logic
    RPSGameplay(playerPick, computerPick) {      
      
        if (playerPick === computerPick) {
            return 0;
        } else
         if (
            (playerPick === "rock" && computerPick === "scissors") ||
            (playerPick === "paper" && computerPick === "rock") ||
            (playerPick === "scissors" && computerPick === "paper")
            ) {
            return 1;
        } else {            
            return -1;
        }        
    }

    //Run Game
    onShoot = () => {
        //Player
        const player = this.state.playerChoice;
        console.log("Your choice", player);
        
        //Computer
        const choices = ["rock", "paper", "scissors"];
        const computer = choices[Math.floor(Math.random() * 3)];
        console.log("Computer choice", computer);
        
        //Result
        const finalResult = this.RPSGameplay(this.state.playerChoice, computer);
        if(finalResult === -1){
            this.setState({
                enemyWins: this.state.enemyWins + 1,
                computerChoice: "Computer Chose: " +  computer,
                result: "Sorry You Lost That One"
            })

        } else if(finalResult === 1){
            this.setState({
                playerWins: this.state.playerWins + 1,
                computerChoice: "Computer Chose: " +  computer,
                result: "Point Goes To You!"
            })
        } else{
        
        this.setState({
            computerChoice: "Computer Chose: " +  computer,
            result: "It's A Tie!! Shoot Again!"
        }) 
    }

    }





    render() {
        const showResult = this.state.result;
        const showPlayer = this.state.playerChoice;
        const showComputer = this.state.computerChoice;
        const wins = this.state.playerWins;
        const losses = this.state.enemyWins;     
        return (
            <div className="rps-game">
                <div className="scoreboard">
                    <div className="wins">
                    Wins:
                    <br/>
                     {wins}
                    </div>
                    <div className="losses">
                    Losses: {losses}
                    </div>
                </div>
                <div className="result-message-display"> 
                <h6>You Chose: {showPlayer} </h6>
                <h6>{showComputer} </h6>
                <p>{showResult}</p>    
                </div>
                
                <div className="player-choices">
                    <button
                        type="button"
                        value="rock"
                        onClick={this.playerAction}
                    >Rock
                    </button>

                    <button
                        type="button"
                        value="paper"
                        onClick={this.playerAction}
                    >Paper
                    </button>

                    <button
                        type="button"
                        value="scissors"
                        onClick={this.playerAction}
                    >Scissors
                    </button>

                </div>
                <br/>
                <div className="confirm-choice">
                    <button
                        type="button"
                        value="shoot"
                        onClick={this.onShoot}
                    >Shoot!
                 </button>
                 <ExitGameButton />
                </div>
                
                
            </div>
        );
    }
}

