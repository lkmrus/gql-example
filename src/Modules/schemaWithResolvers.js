import { mergeResolvers, loadSchemaSync, loadFilesSync, GraphQLFileLoader, addResolversToSchema } from 'graphql-tools';
// import { GraphQLDate, GraphQLDateTime, GraphQLTime } from 'graphql-iso-date';

// Мержим схемы
const schema = loadSchemaSync(`${__dirname}/*/**/*.graphql`, {
	loaders: [new GraphQLFileLoader()],
});

// Загружаем все резолверы из модулей
const resolvers = loadFilesSync(`${__dirname}/*/*.js`);

// Собираем схему
const schemaWithResolvers = addResolversToSchema({
	schema,
	resolvers: mergeResolvers(resolvers),
});

export default schemaWithResolvers;
