import React from 'react';
import logo  from 'images/health.png';
import '../style.css'
export default function Navbar() {
  const names = ["hello","iam","zebbara","abdessamad","hi"]; 
  const pokemon = names.map((name)=>{
      return `<p>${name}</p>`;
  })
  console.log(pokemon);
  
  return (
    <nav className="navbar">
        <img className="logo" src={logo} alt="Logo" />
        <h1>Health Connect</h1>
    </nav>
  );
}
