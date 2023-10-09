import React, { useRef, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Introduction() {
    const scrollValue = useRef(null);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY >= scrollValue.current.offsetTop - 300) {
            scrollValue.current.classList.add("on");
        }
    };

    return (
        <section className="introduction" ref={scrollValue}>
            <div className="inner">
                <h1>Introduction to where it is used</h1>
                <p>
                    In the situations below, using Microsoft 365 can be used
                    efficiently and allows you to experience more!
                    <Link to="/#;"> Lrean more.</Link>
                </p>
                <div className="wrap">
                    <article>
                        <div className="pic">
                            <img
                                src={`${process.env.PUBLIC_URL}/img/main/Introduction/pic-1.png`}
                                alt="Making ppt use Microsoft365"
                            />
                        </div>
                        <h2>
                            Effectively used when <br />
                            working with presentation materials{" "}
                        </h2>
                        <span>
                            Visit More <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                    </article>
                    <article>
                        <div className="pic">
                            <img
                                src={`${process.env.PUBLIC_URL}/img/main/Introduction/pic-2.jpg`}
                                alt="presented by a woman as PPT data"
                            />
                        </div>
                        <h2>
                            You can create presentation materials and conduct
                            presentations
                        </h2>
                        <span>
                            Visit More <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                    </article>
                    <article>
                        <div className="pic">
                            <img
                                src={`${process.env.PUBLIC_URL}/img/main/Introduction/pic-3.png`}
                                alt="Four people use microsoft-365's Teams"
                            />
                        </div>
                        <h2>
                            Using Teams, you can use team projects while working{" "}
                            <br /> from home
                        </h2>
                        <span>
                            Visit More <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                    </article>
                    <article>
                        <div className="pic">
                            <img
                                src={`${process.env.PUBLIC_URL}/img/main/Introduction/pic-4.png`}
                                alt="microsoft-365's 10things program in folder at smartphone's backgorund"
                            />
                        </div>
                        <h2>
                            can receive and check <br /> important data on your
                            mobile phone
                        </h2>
                        <span>
                            Visit More <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                    </article>
                    <article>
                        <div className="pic">
                            <img
                                src={`${process.env.PUBLIC_URL}/img/main/Introduction/pic-5.jpg`}
                                alt="3D version database containing member information"
                            />
                        </div>
                        <h2>
                            When using Excel and Access <br /> can be stored and
                            modified <br /> more easily
                        </h2>
                        <span>
                            Visit More <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                    </article>
                    <article>
                        <div className="pic">
                            <img
                                src={`${process.env.PUBLIC_URL}/img/main/Introduction/pic-6.png`}
                                alt="So many programing language(c++ Ruby java Perl delphi scala c pascal Program java python)"
                            />
                        </div>
                        <h2>
                            With MS365, you can access various programs <br />
                            more easily.
                        </h2>
                        <span>
                            Visit More <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default memo(Introduction);
