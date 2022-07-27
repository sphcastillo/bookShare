import React from 'react';
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbarWrapper">
            <div>
                <div className="navbarTitle">Between Pages</div>
            </div>
            <div className="navbarOptionsWrapper">
                <div className="navOptions">Search</div>
                <div className="navOptions">Saved</div>
            </div>
        </div>
    )
}

export default Navbar;