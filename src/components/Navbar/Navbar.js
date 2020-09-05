import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { GiBookshelf } from 'react-icons/gi';
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top" >
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>

                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav" >
                        <li><a href="https://www.linkedin.com/in/matthewdonovancs/" target="_blank"><AiFillLinkedin size={22} /></a></li>
                        <li><a href="https://github.com/mabthew" target="_blank"><AiFillGithub size={22} /></a></li>
                        <li><a href="https://www.goodreads.com/user/show/120963451-matthew-donovan" target="_blank"><GiBookshelf size={22} /></a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right" >
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;
