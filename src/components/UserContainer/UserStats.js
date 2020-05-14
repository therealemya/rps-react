import React, { Component } from 'react';
import DropDown from '../CustomContainer/DropDown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class UserStats extends Component {

    render() {
        return (
            <div className="userStats">
                <DropDown/> 

                <Container className="user-stats">
                    <h1> [Player Name] </h1>
                <br/>

                <Row className="user-stats-row-1">
                    
                        <Col>Ranking</Col>
                        <Col id="profile-picture"><i class="fas fa-user-astronaut"></i></Col>
                        <Col>Achievements</Col>
                    
                </Row>

                <br/>
                

                <Row className="user-stats-row-2">
                    
                        <Col>Wins:</Col>
                        <Col>Loses:</Col>
                        <Col>Draws:</Col>
                    
                    </Row>
                </Container>
            </div>
        );
    }
}