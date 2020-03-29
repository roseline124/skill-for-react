const Router = require('koa-router')
const postController = require('./posts.controller')

const posts = new Router()

posts.get('/', postController.postList)
posts.post('/', postController.create)
posts.patch('/:id', postController.update)

module.exports = posts
