import path from 'path'

const root = process.cwd()
const src = path.join(root, 'src')
const client = path.join(src, 'client')

export default {
  context: src,
  entry: {
    app: path.join(client, 'index.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(root, 'dist'),
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
  }
}
