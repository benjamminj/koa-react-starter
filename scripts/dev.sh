# builds the client-side code first
# starts the server in development mode, using babel to compile on the fly.
npm run build:client
node -r babel-register -r babel-polyfill src/server
