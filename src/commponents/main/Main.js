import React from "react";
import { useRef } from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import Pop from "../common/Pop";

function Main() {
    const frame = useRef("");
    const youtubeView = useRef("");

    return (
        <>
            <section className="main page" ref={frame}>
                <div className="title">
                    <h2>Microsoft365</h2>
                    <h1>Production Program Introduction</h1>
                    <p>
                        An introduction page for Microsoft that can be used
                        individually or in teamwork
                        <br /> such as presentation materials and materials to
                        be submitted.
                    </p>
                    <Link
                        to="/#;"
                        className="youtubeBtn"
                        onClick={(e) => {
                            e.preventDefault();
                            youtubeView.current.open();
                            document.body.classList.add("stop-scrolling");
                        }}
                    >
                        Introduction Video
                    </Link>

                    <div className="icons">
                        <Link to="#;" title="Microsoft">
                            <FontAwesomeIcon icon={faMicrosoft} />
                        </Link>
                        <Link to="#;" title="JavaScript">
                            <FontAwesomeIcon icon={faJs} />
                        </Link>
                        <Link to="#;" title="Node.js">
                            <FontAwesomeIcon icon={faNode} />
                        </Link>
                    </div>
                </div>
                <div className="square"></div>
            </section>
            <Pop ref={youtubeView}>
                <iframe
                    title="viewYoutube"
                    src="https://www.youtube.com/embed/qKG8r1NERl4"
                    width="100%"
                    height="100%"
                ></iframe>
            </Pop>
        </>
    );
}

export default Main;
