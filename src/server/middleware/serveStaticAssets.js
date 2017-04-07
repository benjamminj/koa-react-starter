import serve from 'koa-static'
import path from 'path'

const dist = path.join(process.cwd(), 'dist')

export default app => {
  app.use(serve(dist))
}
