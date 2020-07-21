import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import styles from "./Movie.module.scss";

const MOVIE = gql`
    query MovieQuery($id: Int) {
        movie(id: $id) {
            title
            plot
            year
            rating
            genre
            tomatoMeter
            audienceScore
            image
        }
    }
`;

const Movie = React.memo(props => {
    const { id } = useParams();

    const { loading, error, data } = useQuery(MOVIE, {
        variables: { id: +id }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

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
    } = data.movie;

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
});

export default Movie;
