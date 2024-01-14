/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import './Navbared.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Typewriter } from "react-simple-typewriter";

function Navbared(props) {
    const width = props.Width;
    return (
        <>
            <Navbar fixed="top" expand="lg" className="d-inline position-absolute">
                <div className={`navv d-flex justify-content-center align-items-center m-0 position-relative`}>
                    <Navbar.Brand href="" className={`navBrand position-absolute m-0 ms-lg-3 ${width < 900 && "mt-3"} `}>
                        <Typewriter words={['<VARSHIT MADISETTI/>']} />
                    </Navbar.Brand>
                    <div>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-3 navLinks">
                                <Nav.Link className={`navLink ${false ? "my-4" : "mx-2"}`} href="about">// home</Nav.Link>
                                <Nav.Link className={`navLink ${false ? "my-4" : "mx-2"}`} href="expertise">// expertise</Nav.Link>
                                <Nav.Link className={`navLink ${false ? "my-4" : "mx-2"}`} href="projects">// work</Nav.Link>
                                <Nav.Link className={`navLink ${false ? "my-4" : "mx-2"}`} href="experience">// experience</Nav.Link>
                                <Nav.Link className={`navLink ${false ? "my-4" : "mx-2"}`} href="contact">// contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </div>
            </Navbar>
        </>
    );
}

export default Navbared;