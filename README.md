# <div align="center">GQL-EXAMPLE<div>

## Установка

Install with npm:
```
sh deploy.sh
```

## Окружение
```
NODE_ENV = production
DATABASE_URL = your_db_url
```

## Запуск приложения

```bash
# Для сборки
$ npm run build

# Watch mode
$ npm run watch

# Production mode
$ npm run start
```

## GraphQL API

`http://localhost:4000/api`

## Содержание
1. [Содержатся только основные функции приложения](./src/index.js)
2. [Контекст запросов GraphQL](./src/context.js)
3. [Миграции и сиды](./prisma)
4. [Вспомогательные функции](./src/Helpers)
5. [Модули приложения](./src/Modules/README.md)