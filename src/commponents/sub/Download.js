import React, { useRef, useEffect } from "react";
import Download_info from "./Download_info";
import Download_version from "./Download_version";
import Download_type from "./Download_type";

function Download() {
    const frame = useRef("");
    let posArr = [];

    const getOffsetTop = () => {
        const sections = frame.current.parentElement.querySelectorAll(".hide");
        const sectionsArr = Array.from(sections);
        sectionsArr.map((el) => {
            posArr.push(el.offsetTop);
        });
    }

    const activation = () => {
        const sections = frame.current.parentElement.querySelectorAll(".hide");
        const scroll = window.scrollY;
        const base = -window.innerHeight / 3;
        if (scroll >= posArr[1] + base) {
            sections[1].classList.add("active");
            sections[2].classList.add("active");
        }

    }

    useEffect(() => {
        setTimeout(() => {
            const sections = frame.current.parentElement.querySelectorAll(".hide");
            sections[0].classList.add("active");
        }, 1000);
        getOffsetTop();
        window.addEventListener("resize", getOffsetTop);
        window.addEventListener("scroll", activation);
        return () => {
            window.removeEventListener("resize", getOffsetTop);
            window.removeEventListener("scroll", activation);

        }
    }, []);
    return (
        <section className="downloadPage" ref={frame}>
            <Download_info />
            <Download_version />
            <Download_type />
        </section>
    );
}

export default Download;
