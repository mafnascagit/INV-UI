import React from 'react'; 
import './style.css'; 
import subscribe from '../images/comingsoon.png'; 
const linkItems = ['Home', 'About', 'Mission', 'Contact']; 

function Navbar() {
    return (
        <div className="navContainer">
            <div><img className="comingSoon" src={subscribe}></img></div>
            <div className="linkItems">{linkItems.map(link => {
                return <span className="linkItem">{link}</span>
            })}</div>
            <div><i class="fa fa-user-circle"></i></div>
        </div>
    )
}

export default Navbar; 