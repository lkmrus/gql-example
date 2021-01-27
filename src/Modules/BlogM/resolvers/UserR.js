import parse from './../../../Helpers/parse';

const resolvers = {
	Query: {
		/**
		 * Получить пользователя по ID
		 * @param {object}
		 * @returns {object}
		 * */
		getUser: async (_, args, { db }) => {
			let out = null;
			try {
				out = await db.users.findFirst({
					where: args,
				});
			} catch (error) {
				console.log(`Получить пользователя не удалось :>> ${error}`);
			}

			return out;
		},

		/**
		 * Получить всех пользователей
		 * @returns {array}
		 */
		getUserList: async (_, args, { db }) => {
			let out = [];
			try {
				out = await db.users.findMany({
					where: { active: true },
				});
			} catch (error) {
				console.log(`Получить пользователей не удалось :>> ${error}`);
			}

			return out;
		},
	},
	Mutation: {
		/**
		 * Добавить пользователя
		 * @param {object}
		 * @returns {boolean}
		 */
		addUser: async (_, args, { db }) => {
			let out = false;
			try {
				out = !!(await db.users.create(parse(args)));
			} catch (error) {
				console.log(`Ошибка при добавлении пользователя :>> ${error}`);
			}

			return out;
		},

		/**
		 * Обновить пользователя
		 * @param {object}
		 * @returns {boolean}
		 */
		updateUser: async (_, args, { db }) => {
			let out = false;
			try {
				out = !!(await db.users.update({
					...parse(args, 'id'),
					where: { id: args.id },
				}));
			} catch (error) {
				console.log(`Ошибка при обновлении пользователей :>> ${error}`);
			}

			return out;
		},

		/**
		 * Удалить пользователя
		 * @param {object}
		 * @returns {boolean}
		 */
		delUser: async (_, args, { db }) => {
			let out = false;

			try {
				out = !!(await db.users.delete({ where: args }));
			} catch (error) {
				console.log(`Ошибка при удалении пользователей :>> ${error}`);
			}

			return out;
		},
	},
};
export default resolvers;
