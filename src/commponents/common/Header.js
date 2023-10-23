import React from "react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import Menu from "./Menu";
function Header() {
    const frame = useRef(null);
    const menu = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            frame.current.classList.add("on");
        }, 300);
    }, []);

    return (
        <header className="" ref={frame}>
            <div className="inner">
                <h1>
                    <Link to="/">
                        <FontAwesomeIcon icon={faWindows} />
                    </Link>
                </h1>
                <nav className="menuWeb">
                    <ul id="gnb">
                        <li>
                            <Link to="/information">INFORMATION</Link>
                        </li>
                        <li>
                            <Link to="/news">NEWS</Link>
                        </li>
                        <li>
                            <Link to="/download">DOWNLOAD</Link>
                        </li>
                        <li>
                            <Link to="/support">SUPPORT</Link>
                        </li>
                    </ul>
                </nav>
                <Menu ref={menu} />
                <Link to="/" className="btnCall">
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={(e) => {
                            e.preventDefault();
                            menu.current.click();
                        }}
                    />
                </Link>
            </div>
        </header>
    );
}

export default Header;
