import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


export default class TermsButton extends Component {

    render() {
        const Button = withRouter(({ history }) => (
            <button
                type="button"
                className="btn btn-link"
                onClick={() => { history.push('/terms') }}
            > Terms and Conditions </button>
        ));


        return <Button />


    }
}