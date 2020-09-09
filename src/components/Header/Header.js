import React from 'react';
import './Header.css'
import Navbar from './../Navbar/Navbar'


function Header() {
    return (
        <div >
            <header >
                <Navbar></Navbar>
                <div className="App-header">
                    <div ><h1 id="name">Matthew Donovan</h1></div>
                    <div> Software Engineer | Boulder, CO</div>
                    <img src="images/me.png" className="App-logo" alt="Matthew Donovan logo" />
                    <div className="oval"></div>
                    <a href="mailto:matthewcb11@gmail.com" className="button">Get in touch</a>
                </div>
            </header>
        </div>
    );
}

export default Header;
