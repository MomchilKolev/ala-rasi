import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { debounce } from "lodash";

import styles from "./Home.module.scss";

import MovieCard from "../../components/MovieCard/MovieCard";
import Sidebar from "../../components/Sidebar/Sidebar";

import { ratings, RATINGS } from "../../reactive_vars/ratings";

const MOVIES = gql`
    {
        movies {
            id
            title
            image
            tomatoMeter
            audienceScore
        }
    }
`;

const Home = props => {
    const [filteredMovies, setFilteredMovies] = useState([]);

    const { loading, error, data } = useQuery(MOVIES);
    const {
        loading: loadingRatings,
        error: errorRatings,
        data: dataRatings
    } = useQuery(RATINGS);

    const debounced = useCallback(
        debounce(movies => {
            const tmp = ratings();
            setFilteredMovies(
                movies.filter(m => {
                    return (
                        m.tomatoMeter >= tmp.tomatoMeter &&
                        m.audienceScore >= tmp.audienceScore
                    );
                })
            );
        }, 200),
        []
    );

    useEffect(() => {
        if (data && data.movies && data.movies.length) debounced(data.movies);
    }, [
        dataRatings.ratings.tomatoMeter,
        dataRatings.ratings.audienceScore,
        data,
        debounced
    ]);

    if (loading || loadingRatings) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (errorRatings) return <p>Error: {errorRatings}</p>;

    const moviesMap = movies =>
        movies.map(m => (
            <Link
                to={`/movie/${m.id}`}
                key={m.id}
                style={{ textDecoration: "none" }}
            >
                <MovieCard title={m.title} imageURL={m.image} />
            </Link>
        ));

    return (
        <div className={styles.home}>
            <div className={styles.movies}>
                {filteredMovies.length
                    ? moviesMap(filteredMovies)
                    : moviesMap(data.movies)}
            </div>
            <Sidebar />
        </div>
    );
};

export default Home;
