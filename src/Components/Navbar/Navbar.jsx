import React from 'react'

import logo from '../../Assets/Logo.png';
import vector from '../../Assets/Vector.png'

import './Navbar.css'

export default function Navbar() {
    return (
        <>
        <div className="navbar">
            <a href="/">
                <img src={logo} alt='logo usertive' />
                <img src={vector} alt="vector logo usertive" className="vector" />
            </a>
            </div>
        </>
    )
}
