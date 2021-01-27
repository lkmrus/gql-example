import express from 'express';
import cors from 'cors';
import { context } from './context';
import session from 'express-session';
import depthLimit from 'graphql-depth-limit';
import { ApolloServer } from 'apollo-server-express';
import schema from './Modules/schemaWithResolvers';
import * as bodyParser from 'body-parser';

const app = express();

app.use(session({ secret: 'supersecretkey', cookie: { maxAge: 60000 } }));

const server = new ApolloServer({
	schema,
	context,
	introspection: true,
	playground: true,
	validationRules: [depthLimit(10)],
	cors: {
		origin: 'http://localhost:4000',
		credentials: true,
	},
});

app.use('*', cors());
app.get('/', (req, res) => res.send('GraphQL API'));

server.applyMiddleware({ app, path: '/api' });

app.use('*', function (req, res, next) {
	res.status(404).send('This page is not found - Error 404');
});

app.listen({ port: 4000 }, () => console.log(`Запущен сервер -> http://localhost:4000${server.graphqlPath}`));
