import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.scss";

import movies from "../../data/movies";

import MovieCard from "../../components/MovieCard/MovieCard";

const Home = props => {
    return (
        <div className={styles.home}>
            <div className={styles.movies}>
                {movies.map(m => (
                    <Link
                        to={`/movie/${m.id}`}
                        key={m.id}
                        style={{ textDecoration: "none" }}
                    >
                        <MovieCard title={m.title} imageURL={m.image} />
                    </Link>
                ))}
            </div>
            <div>Filters</div>
        </div>
    );
};

export default Home;
