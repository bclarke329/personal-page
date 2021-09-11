import React, { Component } from 'react';
import Headshot from '../images/bessyheadshot.jpeg'

class Home extends Component {
    render() {
        return (
            <div className="name">
                <h1>Bessy S. Clarke</h1>
                <img src={Headshot} className="circle-photo"></img>
                <p className="bio">Full-Stack Web Developer with experience in JavaScript, React, Redux, Ruby On Rails, HTML, CSS</p>
            </div>
        );
    }
}

export default Home;
