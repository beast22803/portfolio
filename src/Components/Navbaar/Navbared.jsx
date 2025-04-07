/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import './Navbared.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Typewriter } from "react-simple-typewriter";

function Navbared({Width}) {
    return (
        <>
            <Navbar fixed="top" expand="lg" className="d-inline position-absolute">
                <div className={`navv d-flex justify-content-center align-items-center m-0 position-relative`}>
                    <Navbar.Brand href="" className={`navBrand position-absolute m-0 ms-lg-3 ${Width < 900 && "mt-3"} `}>
                        <Typewriter words={['<beast22803 />']} />
                    </Navbar.Brand>
                    <div>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="navLinks">
                                {/* <Nav.Link className={`navLink`} href="#home">// home</Nav.Link> */}
                                <Nav.Link className={`navLink`} href="#expertise">// expertise</Nav.Link>
                                <Nav.Link className={`navLink`} href="#creation">// creations</Nav.Link>
                                <Nav.Link className={`navLink`} href="#experience">// experience</Nav.Link>
                                <Nav.Link className={`navLink`} href="#contact">// contact</Nav.Link>
                                {Width > 990 && <Nav.Link target="_blank" className={`navLink`} href="https://drive.google.com/file/d/19gnVs0ZOQWuoax_FUbW_xWawY56uFmZi/view?usp=drive_link">// resume</Nav.Link>}
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </div>
            </Navbar>
        </>
    );
}

export default Navbared;
