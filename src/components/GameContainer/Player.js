import React from 'react';
import rock from '../../images/rock.png';
import paper from '../../images/paper.png';
import scissors from '../../images/scissors.png';
import question from '../../images/question.png';

const Player = ({ choice }) => (
    <>
        <div className="playerChoice">
            <img
                className="choice-image"
                src={
                    choice === "rock" ? rock :
                        choice === "paper" ? paper :
                            choice === "scissors" ? scissors :
                            question
                }
                alt="rps images"
            />
        </div>
    </>
);

export default Player;