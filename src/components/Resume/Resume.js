import React from 'react';
import './Resume.css'

function Resume() {
    return (
        <div className="resume-container">
            <embed src="resume.pdf" type="application/pdf" className="resume" />
        </div>
    );
}

export default Resume;
