import React, { useRef, useEffect } from "react";
import DOWNLOAD_INFO from "./Download_info";
import DOWNLOAD_VERSION from "./Download_version";
import DOWNLOAD_TYPE from "./Download_type";

function Download() {
    const frame = useRef("");

    useEffect(() => {
        let posArr = [];
        const activeClass = setTimeout(() => {
            const sections =
                frame.current.parentElement.querySelectorAll(".hide");
            sections[0].classList.add("active");
        }, 1000);

        const getOffsetTop = () => {
            const sections =
                frame.current.parentElement.querySelectorAll(".hide");
            sections.forEach((el) => {
                posArr.push(el.offsetTop);
            });
        };

        const activation = () => {
            const sections =
                frame.current.parentElement.querySelectorAll(".hide");
            const scroll = window.scrollY;
            const base = -window.innerHeight / 3;
            if (scroll >= posArr[1] + base) {
                sections[1].classList.add("active");
                sections[2].classList.add("active");
            }
        };

        getOffsetTop();
        window.addEventListener("resize", getOffsetTop);
        window.addEventListener("scroll", activation);
        return () => {
            window.removeEventListener("resize", getOffsetTop);
            window.removeEventListener("scroll", activation);
            clearTimeout(activeClass);
        };
    }, []);
    return (
        <section className="downloadPage" ref={frame}>
            <DOWNLOAD_INFO />
            <DOWNLOAD_VERSION />
            <DOWNLOAD_TYPE />
        </section>
    );
}

export default Download;
