import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
const Menu = forwardRef((props, ref) => {
    const [Open, setOpen] = useState(false);
    useImperativeHandle(ref, () => {
        return {
            click: () => setOpen(!Open),
        };
    });

    return (
        <AnimatePresence>
            {Open && (
                <motion.nav
                    className="menuMo"
                    onClick={() => setOpen(!Open)}
                    initial={{ left: -270 }}
                    animate={{ left: 0, transition: { duration: 0.5 } }}
                    exit={{ left: -270, transition: { duration: 0.5 } }}
                >
                    <h2>
                        <Link to="/">
                            <FontAwesomeIcon icon={faWindows} />
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
                </motion.nav>
            )}
        </AnimatePresence>
    );
});

export default Menu;
