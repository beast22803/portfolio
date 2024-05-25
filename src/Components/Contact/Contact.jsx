/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Contact.css";
import { Col } from "react-bootstrap";

function Contact() {
    return (
        <section id="contact" className="contactDiv">
            <div className="d-flex flex-column flex-fill">
                <div className="d-flex contactRow">
                    <Col md={6} className="mb-4 mb-md-0">
                        <div className="Col1">
                            <div>
                                <h2 className="contactMsgHead">If you find my <br /> work intriguing, please feel free to reach out to me.</h2>
                            </div>
                            <div className="py-4"></div>
                            <div>
                                <h4 className="emailHead">varshit.madi@gmail.com</h4>
                                {/* <h4 className="emailHead">(+91) 95025 41052</h4> */}
                            </div>
                            <div className="socialDiv mt-4">
                                <h5 className="my-2 socialP"><a href="https://www.linkedin.com/in/varshitmadisetti/" target="_blank" style={{textDecoration: "none", color: "#FFFFFF"}}>LinkedIn</a></h5>
                                <h5 className="my-2 socialP"><a href="https://www.instagram.com/beast22803/" target="_blank" style={{textDecoration: "none", color: "#FFFFFF"}}>Instagram</a></h5>
                                <h5 className="my-2 socialP"><a href="https://github.com/beast22803" target="_blank" style={{textDecoration: "none", color: "#FFFFFF"}}>Github</a></h5>
                            </div>
                        </div>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={1}></Col>
                    <Col style={{ backgroundColor: "#bc60fb", color: "#FFFFFF" }} className="p-4" md={3}>
                        <div className="d-flex justify-content-end">
                            <img src="https://rupakr.netlify.app/assets/images/avatar-3.png" alt="" height={"70px"} width={"70px"} />
                        </div>
                        <div className="contactP">
                            <p className="m-0 mt-3 contactP">As Varshit's mentor, I admired his unwavering commitment and creative problem-solving skills, which played a pivotal role in our project's success. His passion and determination are indicative of a promising future in the field</p>
                        </div>
                        <div className="mt-4 contactP">
                            <p className="m-0">- Dr. R. Srilaxhmi </p>
                            <p className="m-0">Professor @ NGIT</p>
                        </div>
                    </Col>
                    {/* <Col style={{ backgroundColor: "#0067dc", color: "#FFFFFF" }} className="p-4" md={2}>
                        <div className="d-flex justify-content-end">
                            <img src="https://tamalsen.dev/wp-content/uploads/2021/07/wilfried_hajek_portrait_circle.png" alt="" height={"70px"} width={"70px"} />
                        </div>
                        <div>
                            <p className="m-0 mt-3">Tamal is AMAZING! If you have any doubt about hiring him, ask me – I am really impressed by this guy!</p>
                        </div>
                        <div className="mt-4">
                            <p className="m-0">- Wilfried Hajek</p>
                            <p className="m-0">Agile Coach | Speaker | Trainer</p>
                        </div>
                    </Col>
                    <Col style={{ backgroundColor: "#923fe6", color: "#FFFFFF" }} className="p-4" md={2}>
                        <div className="d-flex justify-content-end">
                            <img src="https://tamalsen.dev/wp-content/uploads/2021/07/jonathan_castro_gleam.png" alt="" height={"70px"} width={"70px"} />
                        </div>
                        <div>
                            <p className="m-0 mt-3">Tamal is one of the best professionals that we have known in web development skills. Between his skills you can find good communication and accuracy with the planning in complex projects.</p>
                        </div>
                        <div className="mt-4">
                            <p className="m-0">- Jonathan Castro</p>
                            <p className="m-0">CEO & Founder at The Cliff</p>
                        </div>
                    </Col> */}
                </div>
            </div>
        </section>
    )
}

export default Contact;
