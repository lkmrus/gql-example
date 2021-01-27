# <div align="center">PRISMA-EXAMPLE<div>

## Installation

Install with npm:
```
sh deploy.sh
```

## Environment for production

```
NODE_ENV = production
DATABASE_URL = your_db_url
```

## Running the app

```bash
# for building
$ npm run build

# watch mode
$ npm run watch

# production mode
$ npm run start
```

## GraphQL API

`http://localhost:4000/api`

## For example

```
# {
#   getUserList{
#     id
#     name
#     email
#     active
#     username
#     updated_at
#     created_at
#   }

#   getUser(id: 66){
#     id
#     name
#     email
#     active
#     username
#   }

  # getCommentList{
  #   id
  #   name
  #   post_id
  #   email
  #   body
  # }

  # getCommentListByPost(post_id: 1){
  #   name
  #   post_id
  #   email
  # }
  
  # getPost(data: {user_id: 1}){
  #   user_id
  #   title
  # }

#   getPostList{
#     id
#     user_id
#     title
#     body
#   }
# }

# mutation {
  # addUser(
  #   data: { name: "Oleg Olegov3", email: "lkmrus@gmail.com", username: "oleg164" }
  # )
  # updateUser(id: 64, data: { name: "Oleg Olegov355", email: "asdgf@qwerty.ru" })
  # delUser(id: 64)
  
  # addComment(data: {post_id: 1, name: "qwerty", body: "asdfdsgfsdfsdf"})
  # updateComment(id: 603, data: { body: "asdasdas"})
  # delComment(data: { id: 604 })
  
  # addPost(data: { title: "asdasdas", body: "sadfikuasdfhsdaf"})
  # updatePost(id: 1, data: { title: "asdasdas", body: "sadfikuasdfhsdaf" })
  # delPost(data: {id:2})
# }


```
