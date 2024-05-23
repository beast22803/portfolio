import React from "react";
import "./Contact.css";
import { Col } from "react-bootstrap";

function Test() {
    return (
        <section id="contact" className="contactDiv">
            <div className="d-flex flex-column flex-fill">
                <div className="d-flex contactRow Col1">
                    <Col md={6} className="mb-4 mb-md-0 d-flex align-items-center justify-content-center">
                        <div className="">
                            <div>
                                <h2 className="contactMsgHead">If you find my <br /> work intriguing, please feel free to reach out to me.</h2>
                            </div>
                            {/* <div className="py-5"></div> */}

                        </div>
                    </Col>
                    <Col md={6} className="ms-5 ps-5">
                        <div>
                            <h4 className="emailHead">varshit.madi@gmail.com</h4>
                            <h4 className="emailHead">(+91) 95025 41052</h4>
                        </div>
                        <div className="socialDiv mt-4">
                            <h5 className="my-2 socialP">Messenger</h5>
                            <h5 className="my-2 socialP">LinkedIn</h5>
                            <h5 className="my-2 socialP">Instagram</h5>
                            <h5 className="my-2 socialP">Github</h5>
                        </div>
                    </Col>
                    {/* <Col style={{ backgroundColor: "#bc60fb", color: "#FFFFFF" }} className="p-4" md={2}>
                        <div className="d-flex justify-content-end">
                            <img src="https://tamalsen.dev/wp-content/uploads/2021/07/mark_portrait_circle.png" alt="" height={"70px"} width={"70px"} />
                        </div>
                        <div>
                            <p className="m-0 mt-3">Since 2018 Tamal has been responsible for the development of our website which has been instrumental to the growth of our company. Even while working remotely he’s been highly responsive, organized and strategic in his thinking. In addition to staying on top of day-to-day site changes and builds.</p>
                        </div>
                        <div className="mt-4">
                            <p className="m-0">- Mark Greenspan</p>
                            <p className="m-0">Founder at influenceTHIS Canada</p>
                        </div>
                    </Col>
                    <Col style={{ backgroundColor: "#0067dc", color: "#FFFFFF" }} className="p-4" md={2}>
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

export default Test;
