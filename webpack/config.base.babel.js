import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

const root = process.cwd()
const src = path.join(root, 'src')
const client = path.join(src, 'client')
const dist = path.join(root, 'dist')

export default {
  context: src,
  entry: {
    app: path.join(client, 'index.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(dist, 'assets'),
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: process.env.TITLE || 'Koa | React',
      template: path.join(client, 'template.html'),
      filename: path.join(dist, 'index.html')
    })
  ]
}
