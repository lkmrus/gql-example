"use strict";

const {
  PrismaClient
} = require('@prisma/client');

const cookie = require('cookie');

const {
  verify
} = require('jsonwebtoken');

const prisma = new PrismaClient();

function getUser(req) {
  const token = cookie.parse(req.headers.cookie || "")["auth.token"];

  if (token) {
    const verifiedToken = verify(token, "supersecretkey");
    return prisma.user.findOne({
      where: {
        id: verifiedToken.userId
      }
    });
  }

  return null;
}

const createContext = async ctx => ({ ...ctx,
  prisma,
  user: await getUser(ctx.req)
});

module.exports = {
  getUser,
  createContext
};