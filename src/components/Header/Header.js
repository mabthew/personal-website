import React from 'react';
import './Header.css'
import Navbar from './../Navbar/Navbar'


function Header() {
    return (
        <div >
            <header >
                <Navbar></Navbar>
                <div className="App-header">
                    <div id="name">Matthew Donovan</div>
                    <div> Software Engineer | Boulder, CO</div>
                    <img src="images/me.png" className="App-logo" alt="logo" />
                    <div className="oval"></div>
                </div>
            </header>
        </div>
    );
}

export default Header;
