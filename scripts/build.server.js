'use strict'

process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

process.on('unhandledRejection', err => {
  throw err
})

require('../config/env')

const fs = require('fs-extra')
const webpack = require('webpack')
const config = require('../config/webpack.config.server')
const paths = require('../config/paths')
const chalk = require('react-dev-utils/chalk')

function build() {
  console.log('Creating server build...')
  if (process.env.NODE_PATH) {
    console.log(
      chalk.yellow(
        'Setting NODE_PATH to resolve modules absolutely has been deprecated in favor of setting baseUrl in jsconfig.json (or tsconfig.json if you are using TypeScript) and will be removed in a future major release of create-react-app.',
      ),
    )
    console.log()
  }

  fs.emptyDirSync(paths.ssrBuild)

  const compiler = webpack(config)
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        console.log(err)
        return
      }

      console.log(stats.toString())
    })
  })
}

build()
