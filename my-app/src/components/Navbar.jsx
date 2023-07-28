import React from "react";
import {Link} from "react-router-dom";
import '../pages/pages.css';

function Navbar(){
    return (<nav>
        <li className="navbar">
            <Link to="/">Home</Link>
        </li>
        <li className="navbar">
            <Link to="/about">About</Link>
        </li>
    </nav>)
}

export default Navbar;