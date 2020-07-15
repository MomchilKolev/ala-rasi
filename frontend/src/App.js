import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import styles from "./App.module.scss";

const Home = lazy(() => import("./views/Home/Home"));
const Movie = lazy(() => import("./views/Movie/Movie"));
const Charts = lazy(() => import("./views/Charts/Charts"));

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <div className={styles.container}>
                <Suspense fallback="Loading...">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/movie/:id" component={Movie} />
                        <Route path="/charts" component={Charts} />
                    </Switch>
                </Suspense>
            </div>
        </div>
    );
}

export default App;
