import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import styles from "./Home.module.scss";

import MovieCard from "../../components/MovieCard/MovieCard";
import Sidebar from "../../components/Sidebar/Sidebar";

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
    const { loading, error, data } = useQuery(MOVIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className={styles.home}>
            <div className={styles.movies}>
                {data.movies.map(m => (
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
