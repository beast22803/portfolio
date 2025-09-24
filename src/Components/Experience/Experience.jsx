import React from "react";
import "./Experience.css";
import { Accordion, Container } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { experiences } from "./data";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function Experience() {
    return (
        <section id="experience" className="experiDiv">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <ScrollAnimation
                    animateIn="animate__fadeIn"
                    animateOnce={true}
                    delay={10}
                >
                    <div className="mb-5">
                        <h1 className="experiHead m-0 text-center">
                            Work <div></div>Experience
                        </h1>
                    </div>
                </ScrollAnimation>

                <div className="mt-1">
                    <Container className="experiCont">
                        <Accordion defaultActiveKey="0" className="experiAccd">
                            {experiences.map((exp, index) => (
                                <>
                                    <Accordion.Item
                                        eventKey={index.toString()}
                                        key={index}
                                        className="eachAccdItem"
                                    >
                                        <Accordion.Header className="eachAccdHead">
                                            {`${exp.role} @ ${exp.company}  ${exp.duration}`}
                                        </Accordion.Header>

                                        <Accordion.Body className="eachAccdBody d-flex my-3">
                                            <div className="d-flex flex-column">
                                                <div className="d-flex companyDetail position-relative">
                                                    <div>
                                                        <span>
                                                            <FaMapMarkerAlt
                                                                className="me-1 icons p-lg-0 ps-1"
                                                                fontSize={"1.2rem"}
                                                            />
                                                        </span>
                                                        <span className="ms-2 me-3">{exp.location}</span>
                                                    </div>
                                                    <a href={exp.link} className="anchorLink m-lg-0 mt-1 ps-1" >
                                                        <span>
                                                            <BsArrowUpRightSquareFill
                                                                className="me-1 icons"
                                                                fontSize={"1rem"}
                                                            />
                                                        </span>
                                                        <span className="ms-2 me-3">
                                                            {new URL(exp.link).hostname}
                                                        </span>
                                                    </a>
                                                </div>

                                                <div className="mb-lg-3">
                                                    <p className="m-0 p-0 companyP">{exp.description}</p>
                                                </div>

                                                <div className="d-flex techStack flex-wrap">
                                                    {exp.techStack.map((tech, i) => (
                                                        <p key={i} className="my-0 mx-2">
                                                            {tech}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <img
                                                        src={exp.image}
                                                        alt={exp.company}
                                                        height={"110px"}
                                                        width={"110px"}
                                                    />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    {experiences.length - 1 !== 0  && <div className="spaceDiv"></div>}
                                </>
                            ))}
                        </Accordion>
                    </Container>
                </div>
            </div>
        </section>
    );
}

export default Experience;
