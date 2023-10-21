import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function Data() {
    return (
        <section className="data_page page">
            <div className="inner">
                <article className="left_side">
                    <div className="main_text">
                        <h1>
                            What Is The Best <br /> Of Microsoft's Progream
                        </h1>
                        <p>
                            The data below is a data table of how often
                            microsoft365 users buy this product and where they
                            use it. The frequency of making ppt for presentation
                            materials and the frequency of using document
                            processing programs were the highest.
                        </p>
                    </div>
                    <div className="sub_text">
                        <div className="table">
                            <p>
                                Isproved <span className="num">60%</span>
                            </p>
                            <p className="data">
                                <span></span>
                            </p>
                        </div>
                        <div className="table">
                            <p>
                                Employment skills
                                <span className="num">79%</span>
                            </p>
                            <p className="data">
                                <span></span>
                            </p>
                        </div>
                        <div className="table">
                            <p>
                                Acquisition license
                                <span className="num">67%</span>
                            </p>
                            <p className="data">
                                <span></span>
                            </p>
                        </div>
                    </div>
                </article>
                <article className="right_side">
                    <div className="pic">
                        <div className="left">
                            <article>
                                <div className="icons">
                                    <FontAwesomeIcon icon={faComputer} />
                                </div>
                                <p>Isproved</p>
                            </article>
                            <article>
                                <div className="icons">
                                    <FontAwesomeIcon icon={faIdCard} />
                                </div>
                                <p>Acquisition license</p>
                            </article>
                        </div>

                        <div className="right">
                            <article>
                                <div className="icons">
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                </div>
                                <p>Employment skills</p>
                            </article>
                            <article>
                                <div className="name">
                                    <h2>Result </h2>
                                    <p>
                                        If you use MS365, you can see the result
                                        like above
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default memo(Data);
