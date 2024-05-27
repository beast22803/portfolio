/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Experience.css";
import { Accordion, Container } from 'react-bootstrap';
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

function Experience(props) {
    return (
        <section id="experience" className="experiDiv">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <ScrollAnimation
                    animateIn="animate__fadeIn"
                    animateOnce={true}
                    delay={10}
                >
                    <div className="mb-5">
                        <h1 className="experiHead m-0 text-center">Work <div></div>Experience</h1>
                    </div>
                </ScrollAnimation>
                <div className="mt-1">
                    <Container className="experiCont">
                        <Accordion defaultActiveKey="0" className="experiAccd">
                            <Accordion.Item eventKey="0" className="eachAccdItem">
                                <Accordion.Header className="eachAccdHead">
                                    Research Intern @ CyberGuard360 &nbsp; MARCH 2023 - Dec 2023
                                </Accordion.Header>
                                <Accordion.Body className="eachAccdBody d-flex my-3">
                                    <div className="d-flex flex-column">

                                        <div className="d-flex companyDetail position-relative">
                                            <div>
                                                <span>
                                                    <FaMapMarkerAlt className="me-1 icons p-lg-0 ps-1" fontSize={"1.2rem"} />
                                                </span>
                                                <span className="ms-2 me-3">Remote (Wilton, United States)</span>
                                            </div>
                                            <a href="https://cyberguard360.com/" target="_blank" className="anchorLink m-lg-0 mt-1 ps-1">
                                                <span>
                                                    <BsArrowUpRightSquareFill className="me-1 icons" fontSize={"1rem"} />
                                                </span>
                                                <span className="ms-2 me-3">cyberguard360.com</span>
                                            </a>
                                        </div>

                                        <div className="mb-lg-3">
                                            <div className="my-2">
                                                <p className="m-0 p-0 companyP">
                                                    Research Intern at CyberGuard360, contributing to advanced cybersecurity projects. Enhanced security protocols and developed PCI DSS compliance solutions.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex techStack">
                                            <p className="my-0 me-2">Cybersecurity</p>
                                            <p className="my-0 mx-2">Python</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <img src="data:image/jpeg;base64,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" alt="" height={"110px"} width={"110px"} />
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <div className="spaceDiv"></div>
                            <Accordion.Item eventKey="1" className="eachAccdItem">
                                <Accordion.Header className="eachAccdHead">
                                    Full Stack Developer @ Owonto &nbsp; APRIL 2023 - JULY 2023
                                </Accordion.Header>
                                <Accordion.Body className="eachAccdBody d-flex my-3">
                                    <div className="d-flex flex-column">

                                        <div className="d-flex companyDetail position-relative">
                                            <div>
                                                <span>
                                                    <FaMapMarkerAlt className="me-1 icons p-lg-0 ps-1" fontSize={"1.2rem"} />
                                                </span>
                                                <span className="ms-2 me-3">Remote (Bangalore, India)</span>
                                            </div>
                                            <a href="https://www.linkedin.com/company/owonto/" target="_blank" className="anchorLink m-lg-0 mt-1 ps-1">
                                                <span>
                                                    <BsArrowUpRightSquareFill className="me-1 icons" fontSize={"1rem"} />
                                                </span>
                                                <span className="ms-2 me-3">owonto.com</span>
                                            </a>
                                        </div>

                                        <div className="mb-lg-3">
                                            <div className="my-2">
                                                <p className="m-0 p-0 companyP">
                                                    Developing full web-based solutions in freelancing on React.js framework and Spring boot.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex techStack">
                                            <p className="my-0 me-2">Javascript</p>
                                            <p className="my-0 mx-2">ReactJS</p>
                                            <p className="my-0 mx-2">MUI</p>
                                            <p className="my-0 mx-2">Redux</p>
                                            <p className="my-0 mx-2">Spring Boot</p>
                                            <p className="my-0 mx-2">MySQL</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK3kTeukVUKeUmt0b_Wf5oF0Ane-31ntqcAwB3C3WsG_NAmwIE-BAQ4A5CpYN2AfIL288&usqp=CAU" alt="" height={"110px"} width={"110px"} />
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Container>
                </div>
            </div>
        </section>
    );
}

export default Experience;
