import React, { Component } from 'react';
import LinkedIn from '../images/linkedin_icon.png'
import Dev from '../images/dev_icon.png'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <a href="https://www.linkedin.com/in/bessyclarke/"> 
                    <img src={LinkedIn} id="linkedin-icon" />
                </a>
                <a href="https://dev.to/bclarke329"> 
                    <img src={Dev} id="dev-icon"/>
                </a>
                <p id="footer-note">B.Clarke 2021</p>
            </div>
        );
    }
}

export default Footer;
