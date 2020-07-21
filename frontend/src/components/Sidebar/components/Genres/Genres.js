import React from "react";
import { useQuery } from "@apollo/client";

import styles from "./Genres.module.scss";

import Button from "../../../Button/Button";

import { genres, GENRES } from "../../../../reactive_vars/genres";

const Genres = props => {
    const { loading, error, data } = useQuery(GENRES);

    const handleClick = type => e => {
        const tmp = genres();
        genres({ ...tmp, [type]: !tmp[type] });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className={styles.genres}>
            <div className={styles["heading-box"]}>
                <h5 className={styles.heading}>Genres</h5>
                <span className={styles.span}>(Click to select)</span>
            </div>
            <div className={styles["genres-box"]}>
                {Object.entries(data.genres).map(([key, value]) => {
                    return (
                        <Button
                            key={key}
                            text={key}
                            size="sm"
                            active={value}
                            onClick={handleClick(key)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Genres;
