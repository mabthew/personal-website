import React from 'react';
import './Experience.css'

function Experience() {
    return (
        <div className="experience" >
            <a name="experience" href="/#"> </a>
            <p className="section-title"><span>Experience</span></p>
            <div className="experience-content">
                <ul className="timeline">
                    <li>
                        <div className="company-name">Good Green Technology</div>
                        <div className="company-location">San Francisco, CA (Remote)</div>
                        <div className="company-dates">June 2020 - Present</div>
                        <ul className="company-description">
                            <li>Develop core API functionality while restructuring the code to be more testable.</li>
                            <li>Design and integrate changes to the SQL data store along with the corresponding code using sequelize.</li>
                            <li>Manage QA and production cloud instances on AWS for the server and database deployments.</li>
                        </ul>
                    </li>
                    <li>
                        <div className="company-name">LogRhythm</div>
                        <div className="company-location">Boulder, CO</div>
                        <div className="company-dates">May 2019 - November 2019</div>
                        <ul className="company-description">
                            <li>Collaborated with a 10-person agile team to build out one of the LogRhythm SIEM APIs.   </li>
                            <li>Built an internal testing tool using Docker that is composed of a RESTful API and a 3rd party test-double to automatically stub out downstream services.</li>
                        </ul>
                    </li>
                    <li>
                        <div className="company-name">Computer Science Tutor</div>
                        <div className="company-location">Boulder, CO</div>
                        <div className="company-dates">January 2017 - May 2019</div>
                        <ul className="company-description">
                            <li>Provided one-on-one tutoring to CU students in Data Structures, Algorithms, Computer Systems, Data Science, and Discrete Math.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Experience;
