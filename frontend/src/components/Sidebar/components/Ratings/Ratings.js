import React from "react";
import { useQuery } from "@apollo/client";

import styles from "./Ratings.module.scss";

import { ratings, RATINGS } from "../../../../reactive_vars/ratings";

const Ratings = React.memo(props => {
    const { loading, error, data } = useQuery(RATINGS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleChange = type => e => {
        const tmp = ratings();
        ratings({ ...tmp, [type]: e.target.value });
    };

    return (
        <div className={styles.ratings}>
            <h4 className={styles.heading}>Ratings</h4>
            <div className={styles.slider}>
                <h5 className={styles["tomato-meter-heading"]}>TOMATO METER</h5>
                <span
                    className={`${styles.rating} ${styles["tomato-meter-rating"]}`}
                >
                    {data.ratings.tomatoMeter}
                </span>
                <input
                    className={styles["tomato-meter-range"]}
                    type="range"
                    min="1"
                    max="100"
                    onChange={handleChange("tomatoMeter")}
                />
            </div>
            <div className={styles.slider}>
                <h5 className={styles["audience-score-heading"]}>
                    AUDIENCE SCORE
                </h5>
                <span
                    className={`${styles.rating} ${styles["audience-score-rating"]}`}
                >
                    {data.ratings.audienceScore}
                </span>
                <input
                    className={styles["audience-score-range"]}
                    type="range"
                    min="1"
                    max="100"
                    onChange={handleChange("audienceScore")}
                />
            </div>
        </div>
    );
});

export default Ratings;
