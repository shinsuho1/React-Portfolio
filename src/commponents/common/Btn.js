import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Btn() {
    const [Theme, setTheme] = useState(true)
    const scrollUp = () => {
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }


    return (
        <div className="btnsBox">
            <div className="theme" onClick={() => { setTheme(!Theme) }}>
                {Theme ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
                {Theme ? document.body.classList.add("dark") : document.body.classList.remove("dark")}
            </div>
            <div class="up" onClick={() => { scrollUp() }}>
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
        </div>
    )
}

export default Btn