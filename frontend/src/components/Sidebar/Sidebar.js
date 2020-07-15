import React from "react";

import styles from "./Sidebar.module.scss";

import Search from "../Search/Search";

const Sidebar = props => {
    return (
        <div className={styles.sidebar}>
            <Search />
        </div>
    );
};

export default Sidebar;
