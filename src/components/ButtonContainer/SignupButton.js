import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


export default class SignupButton extends Component {
    render() {
        const Button = withRouter(({ history }) => (
            <button
                type="button"
                class="btn btn-primary"
                onClick={() => { history.push('/signup') }}
            > Signup </button>
        ));


        return <Button />
    }
}