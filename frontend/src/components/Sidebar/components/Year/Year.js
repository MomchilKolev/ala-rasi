import React from "react";
import { useQuery } from "@apollo/client";

import styles from "./Year.module.scss";

import { year, YEAR } from "../../../../reactive_vars/year";

const Year = props => {
    const { loading, error, data } = useQuery(YEAR);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleChange = type => e => {
        const tmp = year();
        year({ ...tmp, [type]: +e.target.value });
    };
    return (
        <div className={styles.year}>
            <h5 className={styles.heading}>Year</h5>
            <input
                className={styles.from}
                type="text"
                placeholder="From"
                onChange={handleChange("from")}
            />
            <hr className={styles.hr} />
            <input
                className={styles.to}
                type="text"
                placeholder="To"
                onChange={handleChange("to")}
            />
        </div>
    );
};

export default Year;
