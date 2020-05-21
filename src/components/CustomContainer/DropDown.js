import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';



export default class DropDown extends Component {
    render() {
        return (
            <Dropdown >
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                <i class="fas fa-user-astronaut"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu id="user-menu">

                    <Dropdown.Item href="/user"><b>Home</b></Dropdown.Item>
                    <Dropdown.Item href="/user/stats"><b>Stats</b></Dropdown.Item>
                    <Dropdown.Item href="/user/donation"><b>Donations</b></Dropdown.Item> 
                    <Dropdown.Item href="/login"><b>Logout</b></Dropdown.Item>                   
                    {/* <Dropdown.Item href="#/user/settings">Settings</Dropdown.Item> */}

                </Dropdown.Menu>
            </Dropdown>
        );
    }
}