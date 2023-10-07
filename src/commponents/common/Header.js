import React from "react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
    const frame = useRef(null);

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
                        <FontAwesomeIcon icon={faDiscord} />
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

                <Link to="/" className="btnCall">
                    <FontAwesomeIcon icon={faBars} />
                </Link>

                <nav className="menuMo">
                    <h2>
                        <Link to="/">
                            <FontAwesomeIcon icon={faDiscord} />
                        </Link>
                        <img
                            src={`${process.env.PUBLIC_URL}/img/close.png`}
                            className="btnClose"
                            alt="Like X ( close button )"
                        />
                    </h2>
                    <ul id="gnbMo">
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
                    <p>&copy; Microsoft365 Introduction</p>
                </nav>
            </div>
        </header>
    );
}

export default Header;
