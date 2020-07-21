const { gql } = require("apollo-server");

module.exports = gql`
    type Movie {
        id: Int
        title: String
        plot: String
        year: Int
        rating: String
        genre: [String]
        tomatoMeter: Int
        audienceScore: Int
        image: String
    }

    type Query {
        movies: [Movie]
        movie(id: Int): Movie
    }
`;
