import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


export default class CancelButton extends Component {

    render() {
        const Button = withRouter(({ history }) => (
            <button
                type="button"
                className="btn btn-dark grey-button"
                onClick={() => { history.push('/') }}
            > Cancel </button>
        ));


        return <Button />
    }
}