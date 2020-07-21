import { makeVar, gql } from "@apollo/client";

export const ratings = makeVar({
    tomatoMeter: 50,
    audienceScore: 50
});

export const RATINGS = gql`
    {
        ratings @client
    }
`;
