import React from "react";
import { useState, useRef, useEffect } from "react";

import InformationLocation from "./Information_location";
import Pop from "../common/Pop";

function Information() {
    const main = useRef(null);
    const pop = useRef(null);

    const [Index, setIndex] = useState(0);

    const asides = [
        {
            img: "img/sub/information/First_article_2.png",
            title: "Microsoft365",
            explan: "Microsoft 365 is a package/subscription type that bundles programs together for use in various situations.",
        },
        {
            img: "img/sub/information/unauth-m365-hero-treatment-b-288e7c77d3.png",
            title: "Introduction",
            explan: "Microsoft 365 is a package that includes everything including document work,video editing, presentations, databases, team projects, synchronization, and diversity.",
        },
    ];

    useEffect(() => {
        const activeCalss = setTimeout(() => {
            main.current.classList.add("active");
            setTimeout(() => {
                const article =
                    main.current.parentElement.querySelectorAll(".hide");
                article.forEach((el, index) => {
                    el.classList.add("active");
                });
            }, 500);
        }, 300);

        return () => {
            clearTimeout(activeCalss);
        };
    }, []);

    return (
        <section className="content information" ref={main}>
            <div className="inner">
                <h1>
                    Information <span>Microsoft365</span>
                </h1>

                <article
                    className="hide"
                    onClick={() => {
                        setIndex(0);
                        pop.current.open();
                    }}
                >
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
                <article
                    className="hide"
                    onClick={() => {
                        setIndex(1);
                        pop.current.open();
                    }}
                >
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

                <InformationLocation />
            </div>

            {Index === 0 && (
                <Pop ref={pop}>
                    <div className="txt">
                        <h1>{asides[0].title}</h1>
                        <p>{asides[0].explan}</p>
                    </div>
                    <figure>
                        <img
                            src={`${process.env.PUBLIC_URL}/${asides[0].img}`}
                            alt={asides[0].title}
                        />
                    </figure>
                </Pop>
            )}
            {Index === 1 && (
                <Pop ref={pop}>
                    <div className="txt">
                        <h1>{asides[1].title}</h1>
                        <p>{asides[1].explan}</p>
                    </div>
                    <figure>
                        <img
                            src={`${process.env.PUBLIC_URL}/${asides[1].img}`}
                            alt={asides[1].title}
                        />
                    </figure>
                </Pop>
            )}
        </section>
    );
}

export default Information;
