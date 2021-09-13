import React, { Component } from 'react';
import LinkedIn from '../images/linkedin_icon.png'
import Dev from '../images/dev_icon.png'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <img src={LinkedIn} id="linkedin-icon" />
                <img src={Dev} id="dev-icon"/>
                <p id="footer-note">B.Clarke 2021</p>
            </div>
        );
    }
}

export default Footer;
