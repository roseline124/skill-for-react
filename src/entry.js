import React from 'react'
import ReactDomServer from 'react-dom/server'
import express from 'express'
import App from './App'
import path from 'path'
import { StaticRouter } from 'react-router-dom'

const app = express()

// 서버사이드 렌더링을 처리할 핸들러 함수
// 404가 떠야하는 상황에 404를 띄우지 않고 서버 사이드 렌더링
const serverRender = (req, res, next) => {
  const context = {}
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )

  const root = ReactDomServer.renderToString(jsx) // 렌더링
  res.send(root) // 클라이언트에게 결과물 응답
}

const serve = express.static(path.resolve('./build'), {
  index: false, // "/" 경로에서 index.html은 보여주지 않도록 설정
})

app.use(serve) // serverRender 이전에 위치해야 css를 미리 불러올 수 있음
app.use(serverRender)

// 5000포트로 서버 시작
app.listen(5000, () => {
  console.log('🔥Running on http://localhost:5000')
})
