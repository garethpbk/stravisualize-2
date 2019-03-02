const { GraphQLServer } = require('graphql-yoga');
const dotenv = require('dotenv').config();

const Query = require('./resolvers/query');

const resolvers = { Query };

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

const options = {
  port: process.env.PORT,
};

server.start(options, () => console.log(`Server is running on ${options.port}`));
