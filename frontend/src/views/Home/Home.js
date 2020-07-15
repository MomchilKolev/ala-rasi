import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.scss";

import movies from "../../data/movies";

import MovieCard from "../../components/MovieCard/MovieCard";
import Sidebar from "../../components/Sidebar/Sidebar";

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
            <Sidebar />
        </div>
    );
};

export default Home;
