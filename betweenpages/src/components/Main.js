import React from 'react';
import './Main.css';
import Friends from "../components/images/friendsShare.jpeg";

function Main() {
    return (
        <div className="mainWrapper">
            <div className="mainImageWrapper">
                <img  
                    className="mainImage"
                    src={Friends}
                    alt="Friends"
                />
            </div>
        </div>
    )
}

export default Main