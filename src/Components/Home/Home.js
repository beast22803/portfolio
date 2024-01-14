import React from "react";
import './Home.css';

function Home() {
    return (
        <>
            <div className="HomeDiv d-flex justify-content-center align-items-center">
                <div className="backImg"></div>
                <div className="childDiv text-center mb-5">
                    <div><h1 className="nameHead">VARSHIT MADISETTI</h1></div>
                    <div>
                        <h3 className="roleHead mt-3">SOFTWARE ENGINEER, FULL STACK & APP DEVELOPER.</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;