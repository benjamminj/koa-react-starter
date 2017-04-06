import test from 'ava'

test.beforeEach(t => {
  delete process.env.PORT
  delete require.cache[require.resolve('./server')]
})

const testPort = (t, port) => {
  let expected = 3000 // default port

  if (port) {
    process.env.PORT = port
    expected = port
  }

  const { server } = require('./server')
  t.is(server.address().port, expected)
}

test('should listen to `process.env.PORT` if set', testPort, 5000)
test('should default to port 3000 if no port is specified', testPort)
