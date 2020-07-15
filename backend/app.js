const { ApolloServer, gql } = require("apollo-server");
const movies = require("./data/movies");
const typeDefs = require("./models/Movie");

const resolvers = {
    Query: {
        movies: () => movies
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
