import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Expertise.css";

function Expertise() {
    return (
        <>
            <div className="expertDiv">
                <div className="p-3">
                    <div>
                        <h1 className="expertHead text-center m-0">My Expertise</h1>
                    </div>
                    <div>
                        <Container className="d-flex justify-content-center m-0 p-0">
                            <Row>
                                <Col xs={4} className="p-0">
                                    <div className="expertSkill">
                                        <div>Software Development</div>
                                        <div></div>
                                    </div>
                                </Col>
                                <Col xs={4} className="p-0">
                                    <div className="expertSkill">
                                        <div>Frontend Developemnt</div>
                                        <div></div>
                                    </div>
                                </Col>
                                <Col xs={4} className="p-0">
                                    <div className="expertSkill">
                                        <div>Backend Development</div>
                                        <div></div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Expertise;