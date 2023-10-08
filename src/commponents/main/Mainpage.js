import React from "react";
// import { useEffect, useState, useCallback } from "react";

import Main from "./Main";
import Introduction from "./Introduction";
import ProgreamSlider from "./ProgreamSlider";
import Data from "./Data";

function Mainpage() {
    let scrollUpBtn = document.createElement("div");

    scrollUpBtn.classList.add("scrollUpBtn");
    scrollUpBtn.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;

    document.body.append(scrollUpBtn);

    scrollUpBtn.addEventListener("click", () => {
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        let scroll = window.scrollY;
        if (scroll >= 100) {
            scrollUpBtn.classList.add("on");
        } else if (scroll < 100) {
            scrollUpBtn.classList.remove("on");
        }
    });
    /*
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        // let scrollY = window.scrollY;
        // console.log(scrollY);
    };
    */

    /*
    // const introduction = useRef(Introduction());
    // console.log(introduction.current);
    // console.log(introduction.current.offsetTop);

    */

    return (
        <>
            <Main />
            <Introduction />
            <ProgreamSlider />
            <Data />
        </>
    );
}

export default Mainpage;
