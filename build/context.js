"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.context = undefined;

var _client = require("@prisma/client");

var _jsonwebtoken = require("jsonwebtoken");

const db = new _client.PrismaClient();
/**
 * Получаем пользователя по токену
 * */

async function getUser(req) {
  const token = req?.cookies?.token || req?.headers?.authorization;

  if (token) {
    const payload = (0, _jsonwebtoken.verify)(token, 'supersecretkey'); // проверяем токен

    const idUser = payload?.sub;
    const user = await db.users.findFirst({
      where: {
        id: idUser
      }
    });

    if (idUser) {
      if (user.isBanned) throw new Error('Bye!');
      return user;
    }
  }

  return null;
}

const context = async ctx => ({ ...ctx,
  db,
  user: await getUser(ctx.req)
});

exports.context = context;