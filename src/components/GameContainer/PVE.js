import React, { Component } from 'react';
import Player from './Player';
import { Link } from 'react-router-dom';



export default class PVE extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerChoice: "",
            computerChoice: "",
            result: "",
            playerWins: 0,
            enemyWins: 0
        }
    }



    //Player Selections
    rockSelect = () => {
        this.setState({
            playerChoice: "rock"
        })
    }

    paperSelect = () => {
        this.setState({
            playerChoice: "paper"
        })
    }

    scissorsSelect = () => {
        this.setState({
            playerChoice: "scissors"
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
        if (finalResult === -1) {
            this.setState({
                enemyWins: this.state.enemyWins + 1,
                computerChoice: computer,
                result: "You Lose!"
            })

        } else if (finalResult === 1) {
            this.setState({
                playerWins: this.state.playerWins + 1,
                computerChoice: computer,
                result: "You Win!"
            })
        } else {

            this.setState({
                computerChoice: computer,
                result: "Tie!!"
            })
        }

    }





    render() {
        const showResult = this.state.result;
        const showPlayer = this.state.playerChoice;
        const showComputer = this.state.computerChoice;
        const wins = this.state.playerWins;
        const losses = this.state.enemyWins;
        const gamePoint = {
            color: "#0091BF"
        }

        return (
            <div className="rps-game">
                <div className="result-message-display">
                    <div className="return">
                        <Link to="/user">
                            <button>
                                <i class="fas fa-arrow-alt-circle-left"></i>
                            </button>
                        </Link>
                    </div>
                    <p id="result">{showResult}</p>
                </div>


                <div className="player-wins">
                    Player

                    <div className="starbar-player">
                        {wins >= 1 ? <i className="fas fa-star" style={gamePoint}></i> : <i className="fas fa-star"></i>}
                        {wins >= 2 ? <i className="fas fa-star" style={gamePoint}></i> : <i className="fas fa-star"></i>}
                        {wins >= 3 ? <i className="fas fa-star" style={gamePoint}></i> : <i className="fas fa-star"></i>}
                    </div>
                    <Player choice={showPlayer} />
                </div>


                <div className="player-choices">
                    <button
                        type="button"
                        value="rock"
                        onClick={this.rockSelect}
                    >
                        <i class="fas fa-hand-rock"
                            onClick={this.rockSelect} ></i>
                    </button>

                    <button
                        type="button"
                        value="paper"
                        onClick={this.paperSelect}
                    >
                        <i class="fas fa-hand-paper"
                            onClick={this.paperSelect}></i>
                    </button>

                    <button
                        type="button"
                        value="scissors"
                        onClick={this.scissorsSelect}
                    >
                        <i class="fas fa-hand-scissors"
                            onClick={this.scissorsSelect}
                        ></i>
                    </button>
                </div>

                <div className="cpu-wins">
                    Computer
                    <div className="starbar-cpu">
                        {losses >= 1 ? <i className="fas fa-star" style={gamePoint}></i> : <i className="fas fa-star"></i>}
                        {losses >= 2 ? <i className="fas fa-star" style={gamePoint}></i> : <i className="fas fa-star"></i>}
                        {losses >= 3 ? <i className="fas fa-star" style={gamePoint}></i> : <i className="fas fa-star"></i>}
                    </div>
                    <Player choice={showComputer} />
                </div>

                <div className="confirm-choice">
                    <button
                        type="button"
                        value="shoot"
                        onClick={this.onShoot}
                    >Shoot!
                 </button>

                </div>


            </div>
        );
    }
}

