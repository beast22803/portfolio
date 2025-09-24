/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Home.css';

function Home() {
    return (
        <section id="home">
            <div className="HomeDiv d-flex justify-content-center align-items-center">
                <div
                    className="backImg"
                    style={{
                        backgroundImage: `linear-gradient(180deg, #00000012 60%, #1a191d 100%), url(${process.env.PUBLIC_URL}/beast22803-cover.jpg)`
                    }}
                ></div>
                <div className="childDiv text-center">
                    <div><h1 className="nameHead">VARSHIT MADISETTI</h1></div>
                    <div>
                        <h3 className="roleHead mt-3">SOFTWARE ENGINEER, FULL STACK DEVELOPER & PHOTOGRAPHER.</h3>
                    </div>
                </div>
            </div>
            <div>
                <a className="hero-mouse anchor" href="#expertise">
                    <div className="mouse-icon"><span></span></div>
                </a>
            </div>
        </section>
    );
}

export default Home;