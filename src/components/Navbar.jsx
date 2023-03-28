import React, { useState } from 'react'
import logo from '../assets/images/logo3.0.jpg' 
import { Squash as Hamburger } from 'hamburger-react'


const Navbar = () => {

const [isOpen, setOpen] = useState()

const handleToggle = () => {
    setOpen(!isOpen)
}

const toggleMenu = () => {
    setOpen(false)
}
    return (
        <header className ="header">
            <div id="logo">
                <a href="#hero"><img src={logo} alt="" /></a>
            </div>
            <nav className ="navbar">
                <ul className ={isOpen ? "nav-menu expanded": "nav-menu"} >
                    <li className ="nav-item">
                        <a href="#aboutMe" className ="nav-link" onClick={toggleMenu}>About</a>
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
                <div className='hamburger' onClick={handleToggle}>
                <Hamburger color="#64FFDA" />
                </div>
            </nav>
        </header>
    )
}

export default Navbar
