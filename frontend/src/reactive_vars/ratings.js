import { makeVar, gql } from "@apollo/client";

export const ratings = makeVar({
    tomatoMeter: 0,
    audienceScore: 0
});

export const RATINGS = gql`
    {
        ratings @client
    }
`;
