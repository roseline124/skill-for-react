let postID = 1

// default data
const posts = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  },
]

/**
 * post create
 * POST /api/posts
 * { title, body }
 */

exports.create = ctx => {
  const { title, body } = ctx.request.body
  console.log('ctx.request', ctx.request)
  postID += 1
  const post = { id: postID, title, body }
  posts.push(post)
  ctx.body = post
}

/**
 * post list
 * GET /api/posts
 */
exports.postList = ctx => {
  ctx.body = posts
}

/**
 * post update
 * PUT /api/posts/:id
 * {title, body}
 */

exports.update = ctx => {
  const { id } = ctx.params
  const index = posts.find(post => post.id.toString() === id)

  if (index === -1) {
    ctx.status = 404
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    }
    return
  }

  posts[index] = {
    ...posts[index],
    ...ctx.request.body,
  }

  ctx.body = posts[index]
}
