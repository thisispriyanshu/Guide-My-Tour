import React from 'react';
import "../index.css"

function Navbar(props) {
    return (
        <div className="navbar">
            <img src="" className="logo-img"/>
            <a href="/" className="navbar-link">Home</a>
            {/* <a href="" className="navbar-link">Places</a> */}
            {/* <a href=""className="navbar-link">Influencers</a> */}
            <button href="" className="navbar-button">Track my device</button>
            <button href="" className="navbar-button">Post</button>
        </div>
    );
}

export default Navbar;