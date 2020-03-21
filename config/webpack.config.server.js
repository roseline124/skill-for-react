const paths = require('./paths')
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent') // CSS Module의 고유 className을 만들 때 필요
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const getClientEnvironment = require('./env')

const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const sassRegex = /\.(.scss|sass)$/
const sassModuleRegex = /\.module\.(.scss|sass)$/

const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1))

module.exports = {
  mode: 'production', // 프로덕션 모드로 설정하여 최적화 옵션들을 활성화
  entry: paths.ssrIndexJs, // entry 경로
  target: 'node', // node 환경에서 실행될 것이라는 점을 명시
  externals: [nodeExternals()],
  output: {
    path: paths.ssrBuild, // 빌드 경로
    filename: 'server.js', // 파일 이름
    publicPath: paths.publicUrlOrPath, // 정적 파일 경로
    chunkFilename: 'js/[name].chunk.js', // 청크 파일 이름
  },
  module: {
    rules: [
      {
        oneOf: [
          // 자바스크립트를 위한 처리
          // 기존 webpack.config.js를 참고해 작성
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides',
              ),
              plugins: [
                [
                  require.resolve('babel-plugin-named-asset-import'),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent:
                          '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                      },
                    },
                  },
                ],
              ],
              cacheDirectory: true,
              cacheCompression: false,
              compact: true,
            },
          },

          // CSS를 위한 처리
          {
            test: cssRegex,
            exclude: cssModuleRegex,
            // onlyLocals: true 옵션을 설정해야 실제 CSS 파일을 생성하지 않음
            loader: require.resolve('css-loader'),
            options: {
              onlyLocals: true,
            },
          },

          // CSS Module을 위한 처리
          {
            test: cssModuleRegex,
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              onlyLocals: true,
              getLocalIdent: getCSSModuleLocalIdent,
            },
          },

          // Sass를 위한 처리
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve('css-loader'),
                options: {
                  onlyLocals: true,
                },
              },
              require.resolve('sass-loader'),
            ],
          },
          // CSS Module + Sass를 위한 처리
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve('css-loader'),
                options: {
                  modules: true,
                  onlyLocals: true,
                  getLocalIdent: getCSSModuleLocalIdent,
                },
              },
              require.resolve('sass-loader'),
            ],
          },
          // url-loader를 위한 설정
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              emitFile: false,
              limit: 10000, // 원래는 9.76kb가 넘으면 파일로 저장, emitFile이 false인 경우 경로만 준비하고 파일은 따로 준비 안함
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          // 위 설정에서 제외된 확장자 파일들은 file-loader 사용
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            options: {
              emitFile: false,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
  },
  plugins: [new webpack.DefinePlugin(env.stringified)], // 환경변수 주입
}
