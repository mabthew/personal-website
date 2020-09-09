import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { GiBookshelf } from 'react-icons/gi';
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top" >
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav" >
                        <li><a href="https://www.linkedin.com/in/matthewdonovancs/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin size={22} /></a></li>
                        <li><a href="https://github.com/mabthew" target="_blank" rel="noopener noreferrer"><AiFillGithub size={22} /></a></li>
                        <li><a href="https://www.goodreads.com/user/show/120963451-matthew-donovan" target="_blank" rel="noopener noreferrer"><GiBookshelf size={22} /></a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right" >
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="/resume" target="_blank" rel="nofollow noopener noreferrer" className="button" >Resume</a></li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;
