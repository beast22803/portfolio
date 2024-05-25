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

function Creations() {
    const projects = [
        {
            image: crowd,
            title: "CrowdQuest",
            category: "Web Developmment",
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
            category: "Web Developemnt",
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
            category: "Web development",
            githubLink: "https://github.com/beast22803/Blog-Website"
        }
    ];

    return (
        <section id="creation" className="projDiv">
            <div>
                <div className="mb-5">
                    <h1 className="m-0 text-center projHead">My Creations</h1>
                </div>
                <Container className="px-lg-5 px-md-0 px-4">
                    <Row>
                        {projects.map((project, index) => (
                            <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
                                <CreationCard
                                    image={project.image}
                                    title={project.title}
                                    category={project.category}
                                    githubLink={project.githubLink}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
                <div></div>
            </div>
        </section>
    );
}

export default Creations;
