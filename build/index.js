"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _context = require("./context");

var _expressSession = require("express-session");

var _expressSession2 = _interopRequireDefault(_expressSession);

var _apolloServerExpress = require("apollo-server-express");

var _client = require("@prisma/client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();
app.use((0, _expressSession2.default)({
  secret: 'keyboard cat',
  cookie: {
    maxAge: 60000
  }
}));
const typeDefs = _apolloServerExpress.gql`
    type Query {
        hello: String
    }
`;
const resolvers = {
  Query: {
    hello: (_, args, ctx) => {
      console.log('context :>> ', ctx.prisma);
      return 'Hello world!';
    }
  }
};
const server = new _apolloServerExpress.ApolloServer({
  typeDefs,
  context: _context.createContext,
  resolvers,
  introspection: true,
  playground: true,
  cors: {
    origin: "http://localhost:4000",
    credentials: true
  }
});
server.applyMiddleware({
  app
});
app.use('*', function (req, res, next) {
  res.status(404).send('This page is not found - Error 404');
});
app.listen({
  port: 4000
}, () => console.log(`Запущен сервер -> http://localhost:4000${server.graphqlPath}`));