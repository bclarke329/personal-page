import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

class Portfolio extends Component {
    render() {
        return (
            <div className="video-grid">
                <h1>Portfolio</h1>
            <div id="grid1">
                <iframe className="port-grid" width="560" height="315" src="https://www.youtube.com/embed/FTb_pysVsMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>Brews On The Bayou: Louisiana Craft Brewery Finder</p>
                <a href="https://github.com/bclarke329/la-breweries-front">Github</a>
            </div>
            <div id="grid2">
                <iframe className="port-grid" width="560" height="315" src="https://www.youtube.com/embed/mlOfilCDDU4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>DermaLog: Daily Skin Tracker App</p>
                <a href="https://github.com/bclarke329/phase3">Github</a>
             </div>
             <div id="grid3">
                <iframe className="port-grid" width="560" height="315" src="https://www.youtube.com/embed/De7gWTOHI4Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>Dungeons & Dragons Character Creator</p>
                <a href="https://github.com/bclarke329/dnd-frontend">Github</a>
             </div>
                
            </div>
        );
    }
}

export default Portfolio;
