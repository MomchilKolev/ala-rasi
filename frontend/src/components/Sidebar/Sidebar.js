import React from "react";

import styles from "./Sidebar.module.scss";

import Search from "./components/Search/Search";
import Ratings from "./components/Ratings/Ratings";

const Sidebar = props => {
    return (
        <div className={styles.sidebar}>
            <Search />
            <Ratings />
        </div>
    );
};

export default Sidebar;
