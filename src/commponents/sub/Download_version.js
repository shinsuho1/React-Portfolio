import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

function Download_version() {
    return (
        <section className="version hide">
            <div className="img"></div>
            <h2>
                Lightweight apps that
                <br />
                install in seconds
            </h2>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faWindows} />
                    <h3>Windows</h3>
                    <p>Windows 10+</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faApple} />
                    <h3>MacOS</h3>
                    <p>macOS 10.15+</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faAndroid} />
                    <h3>Android</h3>
                    <p>Google Play</p>
                </li>
            </ul>
            <p>It can be used on the same OS as above.</p>
        </section>
    );
}

export default Download_version;
