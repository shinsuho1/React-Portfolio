import React from "react";
import { useRef, useEffect } from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";

function Main() {
    const frame = useRef("");
    const youtubeBtn = useRef("");
    const vidList = useRef("");
    useEffect(() => {
        setTimeout(() => {
            frame.current.classList.add("on");
        }, 700);
    }, []);

    // function openYoutube() {
    //     frame.current.classList.remove("on");
    //     let pop = document.createElement("figure");
    //     pop.classList.add("pop");

    //     pop.innerHTML = `
    //         <iframe src="https://www.youtube.com/embed/qKG8r1NERl4" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
    //         <span class="btnClose"><img src="./img/close.png" alt=""></span>
    //     `;
    //     vidList.current.append(pop);
    //     document.body.classList.add("stop-scrolling");

    //     pop.addEventListener("click", (e) => {
    //         document.body.classList.remove("stop-scrolling");
    //         if (pop) {
    //             const close = pop.querySelector("span>img");
    //             if (e.target === close) {
    //                 pop.remove();
    //                 frame.current.classList.add("on");
    //             }
    //         }
    //     });
    // }
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
                <Link
                    to="/#;"
                    className="youtubeBtn"
                    ref={youtubeBtn}
                    onClick={(e) => {
                        e.preventDefault();
                        // openYoutube();
                    }}
                >
                    Introduction Video
                </Link>

                <div className="icons">
                    <Link to="#;" title="Microsoft">
                        <FontAwesomeIcon icon={faMicrosoft} />
                    </Link>
                    <Link to="#;" title="Adobe">
                        <img
                            src={`${process.env.PUBLIC_URL}/img/어도비 로고.png`}
                            alt="adobe's log img"
                        />
                    </Link>
                    <Link to="#;" title="Node.js">
                        <FontAwesomeIcon icon={faNode} />
                    </Link>
                    <p className="ms">Go to the official Microsoft site?</p>
                    <p className="adobe">Go to the official Adobe site?</p>
                    <p className="node">Go to the NodeJs download site?</p>
                </div>
            </div>
            <div className="square"></div>
            <div className="vidList" ref={vidList}></div>
        </section>
    );
}

export default Main;
