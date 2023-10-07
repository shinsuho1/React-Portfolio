import React from "react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
function Information() {
    const main = useRef(null);
    const article1 = useRef(null);
    const article2 = useRef(null);
    const article3 = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            main.current.classList.add("atvie");
            setTimeout(() => {
                article1.current.classList.add("first");
                article2.current.classList.add("first");
                article3.current.classList.add("first");
            }, 500);
        }, 300);
    }, []);

    return (
        <section className="content information" ref={main}>
            <nav>
                <ul>
                    <li className="on">Main</li>
                    <li>Introduction</li>
                    <li>Address</li>
                </ul>
            </nav>
            <div className="inner ative">
                <h1>
                    Information <span>Microsoft365</span>
                </h1>

                <article ref={article1}>
                    <div className="pic">
                        <img
                            src={`${process.env.PUBLIC_URL}/img/sub/information/First_article_1.png`}
                            alt="microsoft-365 logo"
                        />
                    </div>
                    <div className="text">
                        <h2>Microsoft365</h2>
                        <p>
                            Microsoft 365 is a package/subscription type that
                            bundles programs together for use in various
                            situations.
                        </p>
                    </div>
                </article>
                <article ref={article2}>
                    <div className="pic">
                        <img
                            src={`${process.env.PUBLIC_URL}/img/sub/information/Second_article_1.jpg`}
                            alt="microsoft's five program img"
                        />
                    </div>
                    <div className="text">
                        <h2>Introduction</h2>
                        <p>
                            Microsoft 365 is a package that includes everything
                            including document work, video editing,
                            presentations, databases, team projects,
                            synchronization, and diversity.
                        </p>
                    </div>
                </article>
                <article className="address" ref={article3}>
                    <div className="text">
                        <h2>Microsoft Address</h2>
                        <p>Current actual address of Microsoft Korea</p>
                    </div>
                    <div className="pic">
                        <img
                            src={`${process.env.PUBLIC_URL}/img/sub/information/loaction.jpg`}
                            alt="In korea loaction img"
                        />
                    </div>
                </article>
            </div>

            <aside>
                <div className="txt">
                    <h1>Microsoft365</h1>
                    <p>클릭하면 내용이 온다</p>
                    <span>
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                </div>
                <figure>
                    <img src="." alt="" />
                </figure>
            </aside>

            <aside className="location">
                <div className="txt1">
                    <h1 className="office">한국마이크로소프트</h1>
                    <span className="title">Headquarters</span>
                    <p className="address">
                        서울 종로구 종로1길 50 더케이트윈타워 A동
                    </p>
                    <span className="location_close">
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                </div>
                <figure>
                    <div id="map"></div>
                </figure>
                <ul className="btns">
                    <li className="on">
                        <Link to="/">Headquarters</Link>
                    </li>
                    <li>
                        <Link to="/">Branch</Link>
                    </li>
                </ul>
            </aside>
        </section>
    );
}

export default Information;
