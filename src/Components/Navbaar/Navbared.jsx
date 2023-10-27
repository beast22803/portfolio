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
            <Navbar fixed="top" expand="lg">
                <Container className="navv justify-content-between align-items-center m-0">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand href="" className="navBrand m-0 ms-3">
                        <Typewriter words={['<VARSHIT MADISETTI/>']} />
                    </Navbar.Brand>
                    {/* <div>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-3">
                                <Nav.Link className={`navLink mx-2 ${width < 900 ? `my-0` : `my-4`}`} href="about">// about</Nav.Link>
                                <Nav.Link className={`navLink mx-2 ${width < 900 ? `my-0` : `my-4`}`} href="expertise">// expertise</Nav.Link>
                                <Nav.Link className={`navLink mx-2 ${width < 900 ? `my-0` : `my-4`}`} href="projects">// projects</Nav.Link>
                                <Nav.Link className={`navLink mx-2 ${width < 900 ? `my-0` : `my-4`}`} href="experience">// experience</Nav.Link>
                                <Nav.Link className={`navLink mx-2 ${width < 900 ? `my-0` : `my-4`}`} href="contact">// contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    <div></div>
                    <div></div> */}
                </Container>
            </Navbar >
        </>
    );
}

export default Navbared;