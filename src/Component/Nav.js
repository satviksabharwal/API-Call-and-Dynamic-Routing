import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="navbar">
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
            <h3>Logo</h3>
            </Link>
            <ul className="nav-list">
            <Link to="/about" style={{textDecoration: 'none', color: 'white', marginRight: '20px', textAlign: 'center', fontWeight: 700, justifyContent: 'center'}}>
            <li>About</li>
            </Link>
            <Link to="/shop" style={{textDecoration: 'none', color: 'white', marginRight: '20px', textAlign: 'center', fontWeight: 700, justifyContent: 'center'}}>
            <li>Shop</li>
            </Link>
            </ul>
        </div>
    )
}

export default Nav;
