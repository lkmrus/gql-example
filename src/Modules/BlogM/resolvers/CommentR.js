import parse from './../../../Helpers/parse';

const resolvers = {
	Query: {
		/**
		 * Получить все комментарии
		 * @param
		 */
		async getCommentList(_, args, { db }) {
			let out = [];
			try {
				out = await db.comments.findMany();
			} catch (error) {
				console.log('Ошибка получения комментариев :>> ', error);
			}
			return out;
		},

		/**
		 * Получить комментарий по post_id
		 * @param {object}
		 */
		async getCommentListByPost(_, args, { db }) {
			let out = [];
			try {
				out = await db.comments.findMany({ where: args});
			} catch (error) {
				console.log('Ошибка получения комментариев по ID поста :>> ', error);
			}
			return out;
		},
	},
	Mutation: {
		/**
		 * Добавить комментарий
		 * @param {object}
		 */
		addComment: async (_, args, { db }) => {
			let out = false;
			try {
				out = !!(await db.comments.create(parse(args)));
			} catch (error) {
				console.log(`Ошибка при добавлении комментария :>> ${error}`);
			}
			return out;
		},

		/**
		 * Обновить комментарий
		 * @param {object}
		 */
		updateComment: async (_, { id, data }, { db }) => {
			let out = false;
			try {
				out = !!(await db.comments.update({
					data: parse(data),
					where: { id },
				}));
			} catch (error) {
				console.log(`Ошибка при обновлении комментария :>> ${error}`);
			}

			return out;
		},

		/**
		 * Удалить комментарий
		 * @param {object}
		 */
		delComment: async (_, { data }, { db }) => {
			let out = false;
			try {
				out = !!(await db.comments.delete({ where: data }));
			} catch (error) {
				console.log(`Ошибка при удалении пользователей :>> ${error}`);
			}
			return out;
		},
	},
};
export default resolvers;
