import serve from 'koa-static'

// Get file paths from `utils` in root directory.
import { filePaths } from '~/utils'
const { distClient } = filePaths

export default app => {
  app.use(serve(distClient))
}
