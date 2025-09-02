import React from "react";
// import Proptypes from 'prop-types';
// import { Link } from "react-router-dom";


export default function Navbar(props){
    return(
        <>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary`}>
</nav>
<nav className="navbar">
        <div className="logo">MyWebsite</div>
        <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
           
        </ul>
</nav>
</>
    )
}