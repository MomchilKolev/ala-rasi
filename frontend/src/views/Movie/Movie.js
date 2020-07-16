import React from "react";
import { useParams } from "react-router-dom";

import styles from "./Movie.module.scss";

import movies from "../../data/movies";

const Movie = props => {
    const { id } = useParams();
    // I absolutely shouldn't iterate over an array to find a single value
    const moviesObj = movies.reduce((acc, curr) => {
        const { id, ...movie } = curr;
        acc[id] = movie;
        return acc;
    }, {});

    console.log("movie", moviesObj[id]);
    const {
        title,
        year,
        rating,
        genre,
        tomatoMeter,
        audienceScore,
        image,
        plot,
        imdbLink,
        rottenTomatoesLink
    } = moviesObj[id];

    return (
        <div className={styles.movie}>
            <img src={image} alt="Movie Image" />
            <div className={styles["movie-data"]}>
                <h5 className={styles.title}>
                    {title}
                    <span className={styles.year}> ({year})</span>
                </h5>
                <p>Rating {rating}</p>
                <div className={styles.scores}>
                    <div className={styles["tomato-meter"]}>
                        <span>Tomato Meter: {tomatoMeter}</span>
                    </div>
                    <div className={styles["audience-score"]}>
                        <span>Audience Score: {audienceScore}</span>
                    </div>
                </div>
                <div className={styles.genres}>
                    <p>{genre.join(", ")}</p>
                </div>
            </div>
            <div className={styles.plot}>
                <h5>Plot</h5>
                <p>{plot}</p>
            </div>
        </div>
    );
};

export default Movie;
