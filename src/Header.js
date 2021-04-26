import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function Header() {
    

    function ControlPanel() {
        return (
            <Nav className="ml-auto">
                <Link className="nav-link" to="/">Main page</Link>
                <Link className="nav-link" to="/About">About me</Link>
                <Link className="nav-link" to="/Projects">Projects</Link>
                <Link className="nav-link" to="/Links">Links</Link>
            </Nav>
        )
    }

    return (
        <>
            <header>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <div id="welcomeContainer">
                        <span><a href="https://www.linkedin.com/in/javier-garcia-martinez-javiscript/" target="_blank">Javier García Martínez</a> - <a href="https://github.com/JavierGM86" target="_blank">Portfolio</a></span>

                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <ControlPanel />
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </>
    )
}

export default Header;