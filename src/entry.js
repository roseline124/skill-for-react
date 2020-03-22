import React from 'react'
import ReactDomServer from 'react-dom/server'
import express from 'express'
import App from './App'
import path from 'path'
import fs from 'fs'
import { StaticRouter } from 'react-router-dom'

// asset-manifest.json에서 파일 경로 조회
const manifest = JSON.parse(
  fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf8'),
)

const chunks = Object.keys(manifest.files)
  .filter(key => /chunk\.js$/.exec(key)) // chunk.js로 끝나는 키를 찾아서
  .map(key => `<script src="${manifest.files[key]}"></script>`) // 스크립트 태그로 변환하고
  .join('') // 합침

// console.log('manifest.files', manifest.files)

function createPage(root) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0,shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />
    <title>React App</title>
    <link rel="stylesheet" href="${manifest.files['main.css']}" />
  </head>
  <body>
    <noscript>You need to enable Javascript to run this app.</noscript>
    <div id="root">
      ${root}
    </div>
    <script src="${manifest.files['runtime-main.js']}"></script>
    ${chunks}
    <script src="${manifest.files['main.js']}"></script>
  </body>
</html>
  `
}

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

  const root = ReactDomServer.renderToString(jsx) // 렌더링을 하고
  res.send(createPage(root)) // 클라이언트에게 결과물 응답
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
