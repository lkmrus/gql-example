import parse from './../../../Helpers/parse';

const resolvers = {
	Query: {
		/**
		 * Получить пост
		 * @param {object}
		 * @returns {object}
		 * */
		async getPost(_, { data }, { db }) {
			let out = [];
			try {
				out = await db.posts.findMany({ where: data });
			} catch (error) {
				console.log(`Получить пост не удалось :>> ${error}`);
			}

			return out;
		},

		/**
		 * Получить посты
		 * @returns {array}
		 */
		async getPostList(_, args, { db }) {
			let out = [];

			try {
				out = await db.posts.findMany();
			} catch (error) {
				console.log(`Получить посты не удалось :>> ${error}`);
			}

			return out;
		},
	},
	Mutation: {
		/**
		 * Добавить пост
		 * @param {object}
		 * @returns {boolean}
		 */
		async addPost(_, args, { db }) {
            let out = false;
			try {
				out = !!(await db.posts.create(parse(args)));
			} catch (error) {
				console.log(`Ошибка при добавлении поста :>> ${error}`);
			}
			return out;
		},

		/**
		 * Обновить пост
		 * @param {object}
		 * @returns {boolean}
		 */
		async updatePost(_, { id, data }, { db }) {
			let out = false;
			try {
				out = !!(await db.posts.update({
					data: parse(data),
					where: { id },
				}));
			} catch (error) {
				console.log(`Ошибка при обновлении поста :>> ${error}`);
			}

			return out;
		},

		/**
		 * Удалить пост
		 * @param {object}
		 * @returns {boolean}
		 */
		async delPost(_, { data }, { db }) {
			let out = false;

			try {
				out = !!(await db.posts.delete({ where: data }));
			} catch (error) {
				console.log(`Ошибка при удалении поста :>> ${error}`);
			}

			return out;
		},
	},
};
export default resolvers;
