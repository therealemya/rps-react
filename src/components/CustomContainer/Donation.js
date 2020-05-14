import React, { Component } from 'react';
import DropDown from '../CustomContainer/DropDown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default class Donation extends Component {

    render() {
        return (
            <div className="donations">
                <DropDown />
                <Container id="donation-container">
                    <Row>
                        <h1>Donation page</h1>
                    </Row>
                    <Row>
                        <p>
                            <b>
                            Welcome to our donation page. You can donate money to nonprofit groups and also charities.
                            There are many best practices that can set up your nonprofit for success, but within your
                            engaging impact stories, simplified donation form, and thorough communication plan,
                            there are a few subtle changes that could encourage more donors to make a donation.
                            </b>
                        </p>
                    </Row>
                    <Row id="donation-img">
                        <img src="https://d3ayyz93zozlya.cloudfront.net/uploaded-images/articlemainimage/19-ways-to-raise-more-money-from-donation-pages-588f620c089a8.jpeg" alt="Trulli" width="300" height="250"></img>

                        <img src="https://biztechmagazine.com/sites/biztechmagazine.com/files/styles/trending_thumb/public/articles/%5Bcdw_tech_site%3Afield_site_shortname%5D/201805/BizTech-MobileNonprofitDonations.jpg?itok=nIe52JND" alt="Trulli" width="300" height="250"></img>

                        <img src="https://www.salvationarmyspringfield.org/wp-content/uploads/2017/10/donations-accepted.png" alt="Trulli" width="300" height="250"></img>
                    </Row>
                    <a href="https://greatnonprofits.org/city/new-castle/DE">Click Here To Make a Donation</a>


                </Container>
            </div>
        );

    }
}
