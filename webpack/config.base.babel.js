import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

// Get file paths from `utils` in root directory.
import { filePaths } from '~/utils'
const { distClient, src, srcClient } = filePaths

export default {
  context: src,
  entry: {
    app: path.join(srcClient, 'index.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(distClient, 'assets'),
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
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
      template: path.join(srcClient, 'template.html'),
      filename: path.join(distClient, 'index.html')
    })
  ]
}
