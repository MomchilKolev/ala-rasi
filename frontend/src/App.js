import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import Navbar from "./components/Navbar/Navbar";

import styles from "./App.module.scss";

import { ratings } from "./reactive_vars/ratings";
import { year } from "./reactive_vars/year";
import { genres } from "./reactive_vars/genres";

const { REACT_APP_URI: uri } = process.env;

const client = new ApolloClient({
    uri,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    ratings: {
                        read() {
                            return ratings();
                        }
                    },
                    year: {
                        read() {
                            return year();
                        }
                    },
                    genres: {
                        read() {
                            return genres();
                        }
                    }
                }
            }
        }
    })
});

const Home = lazy(() => import("./views/Home/Home"));
const Movie = lazy(() => import("./views/Movie/Movie"));
const Charts = lazy(() => import("./views/Charts/Charts"));

function App() {
    return (
        <ApolloProvider client={client}>
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
        </ApolloProvider>
    );
}

export default App;
