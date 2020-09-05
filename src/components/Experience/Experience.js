import React from 'react';
import './Experience.css'

function Experience() {
    return (
        <div className="experience" >
            <a name="experience" className="anchor-space"></a>
            <p className="section-title"><span>Experience</span></p>
            <div className="experience-content">
                <ul class="timeline">
                    <li>
                        <div className="company-name">Good Green Technology</div>
                        <div className="company-location">San Francisco, CA (Remote)</div>
                        <div className="company-dates">June 2020 - Present</div>
                        <ul className="company-description">
                            <li> Developed core API functionality while re-designing the code to be more testable. </li>
                            <li>Designed and implemented a noSQL data store to accelerate the development cycle while building functionality around data that didn't fit a relational model.</li>
                            <li>Managed QA and production cloud instances on AWS for the server and database deployments.</li>
                        </ul>
                    </li>
                    <li>
                        <div className="company-name">LogRhythm</div>
                        <div className="company-location">Boulder, CO</div>
                        <div className="company-dates">May 2019 - November 2019</div>
                        <ul className="company-description">
                            <li>Collaborated with a 10-person agile team to build out one of the LogRhythm SIEM APIs.   </li>
                            <li>Built a docker containerized tool for internal use composed of a RESTful API that leveraged a test-double to stub out downstream services and facilitate automation testing.</li>
                        </ul>
                    </li>
                    <li>
                        <div className="company-name">Computer Science Tutor</div>
                        <div className="company-location">Boulder, CO</div>
                        <div className="company-dates">January 2017 - May 2019</div>
                        <ul className="company-description">
                            <li>Collaborated with a 10-person agile team to build out one of the LogRhythm SIEM APIs.   </li>
                            <li>Built a docker containerized tool for internal use composed of a RESTful API that leveraged a test-double to stub out downstream services and facilitate automation testing.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Experience;
