import React from "react";
import TrollFace from '../Images/Troll Face.png'


function Header()
{
    return(
        <header className="header">
            <img 
            src={TrollFace} alt="not visible" 
            className="header--image" 
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Cource - Project 3 </h4>
        </header>        
    )
}
export default Header;