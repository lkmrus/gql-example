import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const db = new PrismaClient();

async function main() {
	await db.post.create({
		data: {},
	});

	const post = await db.post.create({
		data: {},
		select: {
			id: true,
		},
	});

	await db.comment.create({
		data: {},
	});

	await db.user.create({
		data: {},
	});
}

main().finally(() => {
	db.disconnect();
});
