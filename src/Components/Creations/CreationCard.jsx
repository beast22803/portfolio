import React, { useState } from "react";
import { Card } from "react-bootstrap";

function CreationCard({ image, title, category, githubLink }) {
    const [hover, setHover] = useState(false);
    const handleButtonClick = () => {
        window.open(githubLink, "_blank");
    };

    return (
        <Card
            className="project-card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                border: 'none'
            }}
        >
            <Card.Img variant="top" onClick={handleButtonClick} src={image} className="cardImg" />
            <Card.Body>
                <Card.Title className="mb-1 cardTitle">{title}</Card.Title>
                {hover ? (
                    <Card.Text className="cardText">
                        <a href={githubLink} target="_blank" className="d-flex align-items-center" rel="noopener noreferrer">
                            Show Project <div className="bigMinus"></div>
                        </a>
                    </Card.Text>
                ) : (
                    <Card.Text className="cardText">{category}</Card.Text>
                )}
            </Card.Body>
        </Card>
    );
}

export default CreationCard;
