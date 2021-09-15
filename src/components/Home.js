import React, { Component } from 'react';
import CircleHeadshot from '../images/circle-headshot.png'

class Home extends Component {
    render() {
        return (
            <div className="name">
                <h1>Bessy S. Clarke</h1>
                <img src={CircleHeadshot} alt="bessy's headshot" id="circle-headshot"></img>
                <p className="bio">Full-Stack Web Developer with experience in JavaScript, React, Redux, Ruby On Rails, HTML, CSS</p>
            </div>
        );
    }
}

export default Home;
