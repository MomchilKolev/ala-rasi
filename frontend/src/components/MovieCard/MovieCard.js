import React from "react";

import styles from "./MovieCard.module.scss";

/**
 *
 * @param {String} title
 * @param {String} imageURL - image src
 */
const MovieCard = props => {
    return (
        <div className={styles["movie-card"]}>
            <div
                className={styles.image}
                style={{ backgroundImage: `url(${props.imageURL})` }}
            />
            <h3 className={styles.title}>{props.title || ""}</h3>
        </div>
    );
};

export default MovieCard;
