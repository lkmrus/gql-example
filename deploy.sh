#!/usr/bin/env bash
# cd /srv/graphql-crud/
# git stash
# git pull
npm i
# npm i knex -g
# npm run migration:down
# npm run migration:latest
# npm run seed:run
npm run build
NODE_ENV=production npm run start