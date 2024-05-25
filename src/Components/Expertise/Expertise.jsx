import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Expertise.css";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import backImg from "../../images/html-code.webp"

function Expertise(props) {
    return (
        <section id="expertise" className="expertDiv">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="mb-5">
                    <h1 className="expertHead text-center m-0">My Expertise</h1>
                </div>
                <div className="mt-1">
                    <Container fluid className="m-0 p-0">
                        <Row className="justify-content-center">
                            <Col md={4} className="eachCol">
                                <div className="expertSkill">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="pe-3">
                                            <HiOutlineDesktopComputer className="expertIcons" />
                                        </div>
                                        <div>
                                            <h4 className="eachExpertHead firstExpertHead">Software</h4>
                                            <h4 className="eachExpertHead">Development</h4>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <div className="tag">
                                            <div className="tagIn">
                                                <span>
                                                    Skilled in functional and OOPs: C / C++, Python, Java, JavaScript, TypeScript.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className="eachCol">
                                <div className="expertSkill">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="pe-3">
                                            <FaReact className="expertIcons" />
                                        </div>
                                        <div>
                                            <h4 className="eachExpertHead secondExpertHead">Frontend Dev</h4>
                                            <h4 className="eachExpertHead">ReactJs</h4>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <div className="tag">
                                            <div className="tagIn">
                                                <span>
                                                    Dedicated to Ux/UI. Profficient with HTML, CSS, JS, ReactJS and its frameworks.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className="eachCol">
                                <div className="expertSkill">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="pe-3">
                                            <FaNodeJs className="expertIcons" />
                                        </div>
                                        <div>
                                            <h4 className="eachExpertHead thirdExpertHead">Backend Dev</h4>
                                            <h4 className="eachExpertHead">NodeJS, MySQL</h4>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <div className="tag">
                                            <div className="tagIn">
                                                <span>
                                                    Skilled in developing backend solutions using Java Spring Boot, Node.js, and databases such as MongoDB and SQL.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div>
                <div className="elementor-element elementor-element-7fc38e6 elementor-widget-mobile__width-initial elementor-widget elementor-widget-image">
                    <div className="elementor-widget-container">
                        <img
                            fetchPriority="high"
                            decoding="async"
                            width="640"
                            height="320"
                            src={backImg}
                            alt=""
                            sizes="(max-width: 640px) 100vw, 640px"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Expertise;
