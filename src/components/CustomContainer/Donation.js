import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import donationbutton from '../../images/donationbutton.png';



export default class Donation extends Component {

    render() {
        return (
            <div className="donations">
                
                <div className="donation-info">
                   
                    <img src={donationbutton} alt="donate" className="donate-image"/>
                        <p>
                            <b>
                            Welcome to our donation page!! Would you like to make a donation to a local charity?
                            </b>
                        </p>
                    
                        </div>
                        <br/>
                    <a href="https://greatnonprofits.org/city/new-castle/DE"><button className="yes-btn">Yes!</button></a>
                    <br/>
                    <Link to="/user" id="donation-return"><button class="btn btn-link">No Thanks</button></Link>

                
            </div>
        );

    }
}
