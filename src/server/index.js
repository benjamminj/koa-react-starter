import { createServer } from 'http'
import Koa from 'koa'

const app = new Koa()

const server = createServer(app)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Listening for connections on ${server.address().port}`)
})
