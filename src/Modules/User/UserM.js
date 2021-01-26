	/**
	 * Получить пользователя по ID
	 * @param {object}
	 * @returns {object}
	 * */
	const getUser = async (_, args, ctx) => {
		let out = null;

		try {
			out = (await ctx.db.findMany(args))[0];
		} catch (error) {
			console.log(`Получить пользователя не удалось :>> ${error}`);
		}

		return out;
	},

	/**
	 * Получить всех пользователей
	 * @returns {array}
	 */
	const getUserList = (_, args, ctx) => {
		let out = [];

		try {
			out = await this.db('users');
		} catch (error) {
			console.log(`Получить пользователей не удалось :>> ${error}`);
		}

		return out;
	},

	/**
	 * Добавить пользователя
	 * @param {object}
	 * @returns {boolean}
	 */
	const addUser = async (_, args, ctx) => {
		let out = false;

		try {
			out = !!(await this.db('users').insert(args));
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
	const updateUser = async (_, args, ctx) => {
		let out = false;
		try {
			const { id, user } = obj;
			
			out = !!(await this.db('users').update(user).where({ id: args.id }));
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
	const delUser = async (obj) => {
		let out = false;

		try {
			out = !!(await this.db('users').where(obj).del());
		} catch (error) {
			console.log(`Ошибка при удалении пользователей :>> ${error}`);
		}

		return out;
	}

	export { Query: {}, }