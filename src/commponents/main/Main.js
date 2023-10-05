import React from "react";
import { useRef } from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";

function Main() {
    const frame = useRef(null);

    setTimeout(() => {
        frame.current.classList.add("on");
    }, 700);

    return (
        <section className="main" ref={frame}>
            <div className="title">
                <h2>Microsoft365</h2>
                <h1>Production Program Introduction</h1>
                <p>
                    An introduction page for Microsoft that can be used
                    individually or in teamwork
                    <br /> such as presentation materials and materials to be
                    submitted.
                </p>
                <Link to="/" className="youtubeBtn">
                    Introduction Video
                </Link>
                {/* <a href="#" class="youtubeBtn">Introduction Video</a> */}

                <div className="icons">
                    <Link
                        to="https://www.microsoft.com/ko-kr/microsoft-365"
                        title="Microsoft"
                    >
                        <FontAwesomeIcon icon={faMicrosoft} />
                    </Link>
                    <Link
                        to="https://www.adobe.com/kr/creativecloud.html"
                        title="Adobe"
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/img/어도비 로고.png`}
                            alt="adobe's log img"
                        />
                    </Link>
                    <Link to="https://nodejs.org/ko" title="Node.js">
                        <FontAwesomeIcon icon={faNode} />
                    </Link>
                    <p className="ms">Go to the official Microsoft site?</p>
                    <p className="adobe">Go to the official Adobe site?</p>
                    <p className="node">Go to the NodeJs download site?</p>
                </div>
            </div>
            <div className="square"></div>
            <div className="vidList"></div>
        </section>
    );
}

export default Main;
