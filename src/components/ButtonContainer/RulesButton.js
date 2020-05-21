import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


export default class RulesButton extends Component{

    render(){
        const Button = withRouter(({history}) => (
            <button 
            type="button"
            className="btn btn-link"
            onClick={() => {history.push('/user/rules')}}
            >How to Play: Game Rules</button>
        ));
        return <Button />
    }

}