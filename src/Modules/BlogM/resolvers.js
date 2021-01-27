import userResolver from './resolvers/UserR';
import commentResolver from './resolvers/CommentR'
import postResolver from './resolvers/PostR'

// Получаем список активных модулей
const resolvers = [
	userResolver,
	commentResolver,
	postResolver,
];

export default resolvers;
