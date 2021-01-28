"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _context = require("./context");

var _expressSession = require("express-session");

var _expressSession2 = _interopRequireDefault(_expressSession);

var _graphqlDepthLimit = require("graphql-depth-limit");

var _graphqlDepthLimit2 = _interopRequireDefault(_graphqlDepthLimit);

var _apolloServerExpress = require("apollo-server-express");

var _schemaWithResolvers = require("./Modules/schemaWithResolvers");

var _schemaWithResolvers2 = _interopRequireDefault(_schemaWithResolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();
app.use((0, _expressSession2.default)({
  secret: 'supersecretkey',
  cookie: {
    maxAge: 60000
  }
}));
const server = new _apolloServerExpress.ApolloServer({
  schema: _schemaWithResolvers2.default,
  context: _context.context,
  introspection: true,
  playground: true,
  validationRules: [(0, _graphqlDepthLimit2.default)(10)],
  cors: {
    origin: 'http://localhost:4000',
    credentials: true
  }
});
app.use('*', (0, _cors2.default)());
app.get('/', (req, res) => res.send('GraphQL API'));
server.applyMiddleware({
  app,
  path: '/api'
});
app.use('*', function (req, res, next) {
  res.status(404).send('This page is not found - Error 404');
});
app.listen({
  port: 4000
}, () => console.log(`Запущен сервер -> http://localhost:4000${server.graphqlPath}`));