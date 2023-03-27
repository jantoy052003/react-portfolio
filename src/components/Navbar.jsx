import React from 'react'
import logo from '../assets/images/logo3.0.jpg' 

const Navbar = () => {
    return (
        <header className ="header">
            <div id="logo">
                <a href="#hero"><img src={logo} alt="" /></a>
            </div>
            <nav className ="navbar">
                <ul className ="nav-menu">
                    <li className ="nav-item">
                        <a href="#aboutMe" className ="nav-link">About</a>
                    </li>
                    <li className ="nav-item">
                        <a href="#workHistory" className ="nav-link">Experiences</a>
                    </li>
                    <li className ="nav-item">
                        <a href="#projects" className ="nav-link">Projects</a>
                    </li>
                    <li className ="nav-item">
                        <a href="#contactMe" className ="nav-link">Contact</a>
                    </li>
                </ul>
                <div className ="hamburger">
                    <span className ="bar"></span>
                    <span className ="bar"></span>
                    <span className ="bar"></span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
