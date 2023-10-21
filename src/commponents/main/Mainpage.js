import React from "react";

import Main from "./Main";
import Introduction from "./Introduction";
import ProgreamSlider from "./ProgreamSlider";
import Data from "./Data";

import { useRef, useEffect } from "react";

function Mainpage() {
    const frame = useRef("");
    let posArr = [];

    const getOffsetTop = () => {
        const sections = frame.current.parentElement.querySelectorAll(".page");
        const sectionsArr = Array.from(sections);
        sectionsArr.map((el) => {
            posArr.push(el.offsetTop);
        });
    };

    const activation = () => {
        const sections = frame.current.parentElement.querySelectorAll(".page");
        const scroll = window.scrollY;
        const base = -window.innerHeight / 3;
        sections.forEach((el, index) => {
            if (scroll >= posArr[index] + base) {
                sections[index].classList.add("on");
            }
        });
    };

    useEffect(() => {
        setTimeout(() => {
            const sections =
                frame.current.parentElement.querySelectorAll(".page");
            sections[0].classList.add("on");
        }, 700);
        getOffsetTop();
        window.addEventListener("resize", getOffsetTop);
        window.addEventListener("scroll", activation);
        return () => {
            window.removeEventListener("resize", getOffsetTop);
            window.removeEventListener("scroll", activation);
        };
    }, []);

    return (
        <main ref={frame}>
            <Main />
            <Introduction />
            <ProgreamSlider />
            <Data />
        </main>
    );
}

export default Mainpage;
