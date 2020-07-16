import React from "react";

import styles from "./Genres.module.scss";

import Button from "../../../Button/Button";

import genres from "../../../../data/genres";

const Genres = props => {
    return (
        <div className={styles.genres}>
            <div className={styles["heading-box"]}>
                <h5 className={styles.heading}>Genres</h5>
                <span className={styles.span}>(Click to select)</span>
            </div>
            <div className={styles["genres-box"]}>
                {Object.entries(genres).map(([key, value]) => {
                    return <Button key={key} text={value} size="sm" />;
                })}
            </div>
        </div>
    );
};

export default Genres;
