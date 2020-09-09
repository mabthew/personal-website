import React from 'react';
import './About.css'

function About() {
    return (
        <div className="about" >
            <a name="about" href="/#"> </a>
            <p className="section-title"><span>About me</span></p>

            <div className="about-content">
                <p>I'm a software engineer based in Boulder, CO. I love building software that makes people's lives better.</p>

                <p>My current goal is to learn as much as I can while providing value wherever possible at the company I'm at. Right now that company is <a href="https://www.linkedin.com/company/good-green-technology/" target="_blank" rel="noopener noreferrer">Good Green Technology</a>, where I work on a wide variety of meaningful and interesting projects as we find our footing in a quickly expanding market. </p>

                <p>My responsibilities range from developing our API, to designing database changes, to managing cloud instances of our QA and production servers.</p>

                <p>Here are some technologies I've been working with lately:</p>

                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <ul>
                                <li>
                                    Javascript
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <ul>
                                <li>
                                    Node.js
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <ul>
                                <li>
                                    React.js
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <ul>
                                <li>
                                    SQL
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <ul>
                                <li>
                                    MongoDB
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <ul>
                                <li>
                                    AWS
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
}

export default About;
