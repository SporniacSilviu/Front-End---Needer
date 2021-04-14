import React from 'react';
import "../App.css";
import logoSirena from './Siren1.gif';
import menuItem from './Menu.svg';

function Navbar() {
    return (
        <div className="Navbar">
            <div class="firstSide"> 
                <img src={logoSirena} alt=""/>
            </div>
            <div class="secondSide"> 
                <img src={menuItem} alt=""/>
            </div> 
            
        </div>
    );
}

export default Navbar;