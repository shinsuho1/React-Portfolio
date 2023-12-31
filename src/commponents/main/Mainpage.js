import React from "react";

import Main from "./Main";
import Introduction from "./Introduction";
import ProgreamSlider from "./ProgreamSlider";
import Data from "./Data";

import { useRef, useEffect } from "react";

function Mainpage() {
    const frame = useRef(null);

    useEffect(() => {
        let posArr = [];
        let eventOnce = true;
        const activeClass = setTimeout(() => {
            const sections =
                frame.current.parentElement.querySelectorAll(".page");
            sections[0].classList.add("on");
        }, 700);

        const getOffsetTop = () => {
            const sections =
                frame.current.parentElement.querySelectorAll(".page");
            sections.forEach((el) => {
                posArr.push(el.offsetTop);
            });
        };

        const activation = () => {
            const sections =
                frame.current.parentElement.querySelectorAll(".page");
            const scroll = window.scrollY;
            const base = -window.innerHeight / 3;
            sections.forEach((el, index) => {
                if (scroll >= posArr[index] + base) {
                    sections[index].classList.add("on");
                }
                if (scroll >= posArr[3] + base) {
                    if (eventOnce) {
                        eventOnce = false;
                        const data_lable =
                            frame.current.querySelectorAll(".table");
                        data_lable.forEach((el, index) => {
                            let numElement = el.querySelector(".num");
                            let num = parseFloat(numElement.innerText);
                            let count = 0;
                            let time = 3000 / num;
                            let interval = setInterval(() => {
                                if (count === num) {
                                    clearInterval(interval);
                                } else {
                                    count++;
                                    numElement.innerText = count + "%";
                                }
                            }, time);
                        });
                    }
                }
            });
        };
        getOffsetTop();
        window.addEventListener("resize", getOffsetTop);
        window.addEventListener("scroll", activation);
        return () => {
            window.removeEventListener("resize", getOffsetTop);
            window.removeEventListener("scroll", activation);
            clearTimeout(activeClass);
        };
    }, [frame]);

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
