import test from 'ava'
import proxyquire from 'proxyquire'
import sinon from 'sinon'

// mock dependencies while importing
// `default` because proxyquire doesn't support es6 modules
const serve = sinon.spy()
const { default: serveStaticAssets } = proxyquire('./serveStaticAssets', {
  'koa-static': serve
})

test('should call serve on the dist directory', t => {
  const app = {
    use: sinon.spy()
  }

  serveStaticAssets(app)
  t.true(app.use.calledOnce)
  t.true(serve.calledOnce)
  t.regex(serve.firstCall.args[0], /client$/)
})
