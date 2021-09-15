import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return (
            <div>
                <h1>Resume</h1>
                <h2 id="tech-projects">Technical Projects</h2>
                <div id="dermalog-info">
                    <u><p>DermaLog</p></u>
                    <a>Github</a> |
                    <a>Demo</a>
                    <p>Full Stack Ruby On Rails Application</p>
                    <p>App that allows users to track their current skincare routines, leave notes on their skin condition, view skincare products, and view product reviews from other users</p>
                    <ul>
                        <li>Allows users to create an account, login, and uses Google's OmniAuth for faster account creation</li>
                        <li>Makes use of Rails' associations, such as: belongs to, has many, and has many through relationships</li>
                        <li>App has full CRUD functionality, allows users to create, edit, and delete routines, skin logs, and edit comments</li>
                    </ul>
                    <div id="Brews-info">
                        <u><p>Brews On The Bayou: Louisiana Craft Brewery Finder</p></u>
                        <a>Github</a> |
                        <a>Demo</a>
                        <p>Full Stack React Project with a Ruby On Rails Backend</p>
                        <p>Users can find Louisiana breweries and view reviews left by other patrons</p>
                        <ul>
                            <li>Uses data from a custom built API, which contains information on Louisiana Breweries</li>
                            <li>Users can search for breweries by parish or city</li>
                            <li>Users can create and edit reviews and also "like" reviews left by other users</li>
                        </ul>
                        <div id="dnd-info">
                            <u><p>Dungeons & Dragons Character Creator</p></u>
                            <a>Github</a>
                            <a>Demo</a>
                            <p>Web app that lets users create parties for their campaigns and add characters to created parties</p>
                            <ul>
                                <li>Built using JavaScript frontend with a Ruby On Rails backend</li>
                                <li>Data used in application is fetched from the Dungeon & Dragon API</li>
                                <li>Users can search for their party pull up previously created parties</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;
