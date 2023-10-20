import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
function Btn() {
    const [Theme, setTheme] = useState(false);
    const scrollBtn = useRef(null);
    useEffect(() => {
        window.addEventListener("scroll", actionScroll);

        return () => {
            window.removeEventListener("scroll", actionScroll);
        }
    }, []);

    const actionScroll = () => {
        let scroll = window.scrollY;
        if (scroll >= 100) {
            scrollBtn.current.classList.add("on");
        }
        else if (scroll < 100) {
            scrollBtn.current.classList.remove("on");
        }
    }

    const scrollUp = () => {
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }


    return (
        <div className="btnsBox">
            <div className="theme" onClick={() => { setTheme(!Theme) }}>
                {Theme ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
                {Theme ? document.body.classList.add("dark") : document.body.classList.remove("dark")}
            </div>
            <div className="up" ref={scrollBtn} onClick={() => {
                scrollUp();
            }}>
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
        </div>
    );
}

export default Btn