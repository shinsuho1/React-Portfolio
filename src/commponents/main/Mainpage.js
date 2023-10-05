import React from "react";
import { useEffect, useRef, useState } from "react";
import Data from "./Data";
import Introduction from "./Introduction";
import Main from "./Main";
import ProgreamSlider from "./ProgreamSlider";

function Mainpage() {
    const scrollRef = useRef(Introduction());
    console.log(scrollRef);
    // console.log(scrollRef.current);
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
            <Introduction
                onScroll={
                    handleScroll == 800
                        ? (scrollRef.current.props.className = "on")
                        : "2"
                }
            />
            <ProgreamSlider />
            <Data />
        </>
    );
}

export default Mainpage;
