import React from "react";
import { useEffect, useRef, useState } from "react";
import Data from "./Data";
import Introduction from "./Introduction";
import Main from "./Main";
import ProgreamSlider from "./ProgreamSlider";

function Mainpage() {
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        let scrollY = window.scrollY;
        console.log(scrollY);
    };

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