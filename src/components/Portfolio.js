import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return (
            <div className="video-grid">
                <h1>Portfolio</h1>

                <iframe className="port-grid" width="560" height="315" src="https://www.youtube.com/embed/FTb_pysVsMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="port-grid" width="560" height="315" src="https://www.youtube.com/embed/mlOfilCDDU4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        );
    }
}

export default Portfolio;
