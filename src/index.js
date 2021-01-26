import express from 'express';
const app = express();
import { createContext } from './context';
import session from 'express-session';
import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-express';
import { GraphQLDate, GraphQLDateTime, GraphQLTime } from 'graphql-iso-date';

// Подключаем модули
// import UserM from './Modules/User/UserM';

app.use(session({ secret: 'supersecretkey', cookie: { maxAge: 60000 } }));

const typeDefs = gql`
	scalar Date
	scalar Time
	scalar DateTime

	type UserQ {
		id: Int!
		name: String
		email: String
		active: Boolean
		username: String
		updated_at: String
		created_at: String
	}

	input UserM {
		name: String
		username: String
		email: String
	}

	type Query {
		getUserList: [UserQ]!
		getUser(id: Int!): UserQ
	}

	type Mutation {
		"Мутации пользователя"
		addUser(user: UserM!): Boolean!
		updateUser(id: Int!, user: UserM!): Boolean!
		delUser(id: Int!): Boolean!
	}
`;

const resolvers = {
	Date: GraphQLDate,
	Time: GraphQLTime,
	DateTime: GraphQLDateTime,

	// Query,
	// Mutation,
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
	schema,
	context: createContext,
	introspection: true,
	playground: true,
	cors: {
		origin: 'http://localhost:4000',
		credentials: true,
	},
});

server.applyMiddleware({ app, path: '/api' });

app.use('*', function (req, res, next) {
	res.status(404).send('This page is not found - Error 404');
});

app.listen({ port: 4000 }, () => console.log(`Запущен сервер -> http://localhost:4000${server.graphqlPath}`));
