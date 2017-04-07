import { createServer } from 'http'
import Koa from 'koa'

import middleware from './middleware'

const app = new Koa()

middleware(app)

export const server = createServer(app.callback())

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Listening for connections on ${server.address().port}`)
})
