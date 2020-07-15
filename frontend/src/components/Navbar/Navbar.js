import React from "react";

import styles from "./Navbar.module.scss";

import Button from "../Button/Button";

const Navbar = props => {
    return (
        <header className={styles.navbar}>
            <h1 className={styles.heading}>Ala Rasi</h1>
            <nav className={styles.nav}>
                <Button to="/" text="Home" />
                <Button to="/charts" text="Charts" />
            </nav>
        </header>
    );
};

export default Navbar;
