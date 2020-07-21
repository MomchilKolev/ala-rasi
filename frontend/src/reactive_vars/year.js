import { makeVar, gql } from "@apollo/client";

export const year = makeVar({
    from: 2010,
    to: 2020
});

export const YEAR = gql`
    {
        year @client
    }
`;
