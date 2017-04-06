import test from 'ava'

test.beforeEach(t => {
  delete process.env.PORT
  delete require.cache[require.resolve('./server')]
})

test('should listen to `process.env.PORT`', t => {
  process.env.PORT = 5000
  const { server } = require('./server')

  t.is(server.address().port.toString(), process.env.PORT)
})

test('should default to port 3000 if no port is specified', t => {
  const { server } = require('./server')

  t.is(server.address().port, 3000)
})
