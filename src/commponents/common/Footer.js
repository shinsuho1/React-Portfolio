import React from "react";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer>
            <div className="inner">
                <h1>Microsoft365 Introduction</h1>
                <ul>
                    <li>
                        <Link to="/">Community</Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link to="/">Privacy</Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link to="/">Download</Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link to="/">GitHub</Link>
                    </li>
                </ul>
                <p>
                    &copy; If you have any errors or corrections on this page,
                    please contact us at suhoshin1816@gmail.com XD
                </p>
            </div>
        </footer>
    );
}

export default Footer;
