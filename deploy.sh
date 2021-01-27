#!/usr/bin/env bash
# cd /srv/prisma-example/
# git stash
# git pull
npm i
# nxp prisma migrate dev --preview-feature
npm run build
NODE_ENV=production npm run start
