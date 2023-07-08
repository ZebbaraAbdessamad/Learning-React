import React from 'react';
import '../style.css'
import meme from 'images/memes.png'
export default function Navbar(props) {

    return (
    <nav className={props.darkMode ? "navbar-dark"  : "navbar"}>
        <img className="logo" src={meme} alt="Logo" />
        <h1>Enjoy memes <button onClick={props.handleClick} className='mode-button'>🌙</button> </h1>
    </nav>
  );
}
