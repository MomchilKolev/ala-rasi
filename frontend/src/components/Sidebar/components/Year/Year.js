import React from "react";

import styles from "./Year.module.scss";

const Year = props => {
    return (
        <div className={styles.year}>
            <h5 className={styles.heading}>Year</h5>
            <input className={styles.from} type="text" placeholder="From" />
            <hr className={styles.hr} />
            <input className={styles.to} type="text" placeholder="To" />
        </div>
    );
};

export default Year;
