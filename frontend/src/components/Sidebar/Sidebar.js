import React from "react";

import styles from "./Sidebar.module.scss";

import Search from "./components/Search/Search";
import Ratings from "./components/Ratings/Ratings";
import Year from "./components/Year/Year";

const Sidebar = props => {
    return (
        <div className={styles.sidebar}>
            <Search />
            <Ratings />
            <Year />
        </div>
    );
};

export default Sidebar;
