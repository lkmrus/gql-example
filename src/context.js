import { PrismaClient } from '@prisma/client';
import { verify } from 'jsonwebtoken';

const db = new PrismaClient(); // Инициализируем подключение к базе

/**
 * Получаем пользователя по токену
 * */
async function getUser(req) {
	const token = req?.cookies?.token || req?.headers?.authorization;
	if (token) {
		const payload = verify(token, 'supersecretkey'); // проверяем токен

		const idUser = payload?.sub;
		const user = await db.users.findFirst({ where: { id: idUser } });

		if (idUser) {
			if (user.isBanned) throw new Error('Bye!');
			return user;
		}
	}
	return null;
}

const context = async (ctx) => ({
	...ctx,
	db,
	user: await getUser(ctx.req),
});

export { context };
