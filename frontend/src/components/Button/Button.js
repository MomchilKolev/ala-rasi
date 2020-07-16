import React from "react";

import { Link, useLocation } from "react-router-dom";

import styles from "./Button.module.scss";

/**
 * @param {String} to - Link to; no to, no link
 * @param {String} text - Text to show
 * @param {String} size - md/sm; defaults to md
 */
const Button = props => {
    const location = useLocation();
    const active = location.pathname == `${props.to}` ? styles.active : "";
    const size = props.size ? styles[props.size] : styles.md;

    const isLink = props.to != undefined;

    return (
        <>
            {isLink ? (
                <Link
                    className={`${styles.link} ${size} ${active}`}
                    to={props.to}
                >
                    {props.text}
                </Link>
            ) : (
                <button
                    className={`${styles.button} ${size} ${active}`}
                    type="button"
                >
                    <p className={styles.text}>{props.text}</p>
                </button>
            )}
        </>
    );
};

export default Button;
