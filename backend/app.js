const { ApolloServer, gql } = require("apollo-server");
const movies = require("./data/movies");
const typeDefs = require("./models/Movie");

const resolvers = {
    Query: {
        movies: () => movies,
        movie: (root, args, context, info) => movies.find(m => m.id === args.id)
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
