const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const api = require('./api')

const app = new Koa()
const router = new Router()

// router 설정
router.use('/api', api.routes()) // api/* 내의 라우트 적용

// router 적용 전에 bodyParser 적용해야 함
app.use(bodyParser())

// router 적용
app.use(router.routes()).use(router.allowedMethods())

app.listen(4000, () => {
  console.log('🔥Listening to http://localhost:4000')
})
