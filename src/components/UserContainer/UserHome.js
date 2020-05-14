import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import DropDown from '../CustomContainer/DropDown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import RulesButton from '../ButtonContainer/RulesButton';



export default class UserHome extends Component {

    render() {
        return (
            <div className="user-home">
                <DropDown />

                <Container className="usercontainer">

                    <Row>
                        <h1>Welcome User</h1>
                    </Row>

                    <Row>
                        <p><b>Select your Game Mode</b></p>
                    </Row>

                    <Row>
                        <button type="button" class="btn btn-light" id="game-button"><b>Vs Computer</b></button>
                    </Row>

                    <br/>

                    <Row>
                        <button type="button" class="btn btn-light" id="game-button"><b>Vs Player</b></button>
                    </Row>

                    <Row>
                        <RulesButton />
                    </Row>

                </Container>
            </div>
        );
    }
}