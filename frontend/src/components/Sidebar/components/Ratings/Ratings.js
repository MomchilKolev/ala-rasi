import React from "react";

import styles from "./Ratings.module.scss";

const Ratings = props => {
    return (
        <div className={styles.ratings}>
            <h4 className={styles.heading}>Ratings</h4>
            <div className={styles.slider}>
                <h5 className={styles["tomato-meter-heading"]}>TOMATO METER</h5>
                <span
                    className={`${styles.rating} ${styles["tomato-meter-rating"]}`}
                >
                    75%
                </span>
                <input
                    className={styles["tomato-meter-range"]}
                    type="range"
                    min="1"
                    max="100"
                />
            </div>
            <div className={styles.slider}>
                <h5 className={styles["audience-score-heading"]}>
                    AUDIENCE SCORE
                </h5>
                <span
                    className={`${styles.rating} ${styles["audience-score-rating"]}`}
                >
                    75%
                </span>
                <input
                    className={styles["audience-score-range"]}
                    type="range"
                    min="1"
                    max="100"
                />
            </div>
        </div>
    );
};

export default Ratings;
