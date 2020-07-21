import { makeVar, gql } from "@apollo/client";

export const genres = makeVar({
    "Action & Adventure": false,
    Animation: false,
    Comedy: false,
    Drama: false,
    Horror: false,
    "Kids & Family": false,
    "Mystery & Suspense": false,
    "Science Fiction & Fantasy": false
});

export const GENRES = gql`
    {
        genres @client
    }
`;
