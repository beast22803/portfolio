import React from "react";
import "./Creations.css";
import { Container, Row, Col } from "react-bootstrap";
import CreationCard from "./CreationCard";
import coltran from '../../images/coltran.jpg';
import todo from '../../images/todo.png';
import faceeye from '../../images/faceeye.avif';
import zeroday from '../../images/zeroday.png';
import blog from '../../images/blog.png';
import crowd from "../../images/crowd.png";
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

function Creations() {
    const projects = [
        {
            image: crowd,
            title: "CrowdQuest",
            category: "Web Development",
            githubLink: "https://github.com/beast22803/Project-CrowdQuest"
        },
        {
            image: coltran,
            title: "Colorisation Transformer",
            category: "Machine Learning",
            githubLink: "https://github.com/beast22803/Colorization-Transformer"
        },
        {
            image: todo,
            title: "Todo List",
            category: "Web Development",
            githubLink: "https://github.com/beast22803/Todo-Redux-App"
        },
        {
            image: faceeye,
            title: "Face and Eye Detection",
            category: "Machine Learning",
            githubLink: "https://github.com/beast22803/Face-and-Eye-Detection"
        },
        {
            image: zeroday,
            title: "Zero Day Attack",
            category: "Machine Learning",
            githubLink: "https://github.com/beast22803/zero_day_attacks"
        },
        {
            image: blog,
            title: "Blog Website",
            category: "Web Development",
            githubLink: "https://github.com/beast22803/Blog-Website"
        }
    ];

    return (
        <section id="creation" className="projDiv">
            <div>
                <ScrollAnimation
                    animateIn="animate__fadeIn"
                    animateOnce={true}
                    delay={10}
                >
                    <div className="mb-5">
                        <h1 className="m-0 text-center projHead animate__animated animate__fadeIn">My Creations</h1>
                    </div>
                </ScrollAnimation>
                <Container className="px-lg-5 px-md-0 px-4">
                    <Row className="justify-content-center">
                        {projects.map((project, index) => (
                            <Col
                                xs={12}
                                sm={6}
                                md={4}
                                className="mb-4"
                            >
                                <ScrollAnimation
                                    key={index}
                                    animateIn="animate__fadeInUp"
                                    animateOnce={true}
                                    delay={index * 100}
                                >
                                    <CreationCard
                                        image={project.image}
                                        title={project.title}
                                        category={project.category}
                                        githubLink={project.githubLink}
                                    />
                                </ScrollAnimation>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Creations;
