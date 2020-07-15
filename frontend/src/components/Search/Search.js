import React from "react";

import styles from "./Search.module.scss";

import { ReactComponent as SearchIcon } from "./SearchIcon.svg";

const Search = props => {
    return (
        <div className={styles.search}>
            <input
                className={styles["search-input"]}
                type="text"
                placeholder="Search..."
            />
            <SearchIcon />
        </div>
    );
};

export default Search;
