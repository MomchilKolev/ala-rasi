import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { debounce } from "lodash";

import styles from "./Home.module.scss";

import MovieCard from "../../components/MovieCard/MovieCard";
import Sidebar from "../../components/Sidebar/Sidebar";

import { ratings, RATINGS } from "../../reactive_vars/ratings";
import { year, YEAR } from "../../reactive_vars/year";
import { genres, GENRES } from "../../reactive_vars/genres";

const MOVIES = gql`
    {
        movies {
            id
            title
            image
            tomatoMeter
            audienceScore
            year
            genre
        }
    }
`;

const Home = props => {
    const [filteredMovies, setFilteredMovies] = useState([]);

    const { loading, error, data } = useQuery(MOVIES);
    const { data: dataRatings } = useQuery(RATINGS);
    const { data: dataYear } = useQuery(YEAR);
    const { data: dataGenres } = useQuery(GENRES);

    // Each movie needs to pass every test to be shown
    // tests are pure functions accepting the current movie
    // returning true or false
    const tests = [
        m => {
            const tmp = ratings();
            return (
                m.tomatoMeter >= tmp.tomatoMeter &&
                m.audienceScore >= tmp.audienceScore
            );
        },
        m => {
            const tmp = year();
            return m.year >= tmp.from && m.year <= tmp.to;
        },
        // Use IIFE here, because we don't need
        // to recalculate selectedGenres for every movie
        (m => {
            const tmp = genres();
            const selectedGenres = Object.entries(tmp).reduce((acc, curr) => {
                if (curr[1] === true) acc.push(curr[0]);
                return acc;
            }, []);
            return m => {
                return selectedGenres.length == 0
                    ? true
                    : m.genre.some(mg => {
                          return selectedGenres.includes(mg);
                      });
            };
        })()
    ];

    const debounced = useCallback(
        debounce((movies, tests) => {
            const filtered = movies.filter(m => tests.every(t => t(m)));
            setFilteredMovies(filtered);
        }, 200),
        []
    );

    useEffect(() => {
        if (data && data.movies && data.movies.length)
            debounced(data.movies, tests);
    }, [
        dataRatings.ratings.tomatoMeter,
        dataRatings.ratings.audienceScore,
        dataYear,
        dataGenres,
        data,
        debounced
    ]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

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
