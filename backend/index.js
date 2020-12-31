const app = require('./app')
const config = require('./utils/config')
const http = require('http')

const server = http.createServer(app)

const PORT = config.PORT || 3001

server.listen(PORT, () => {
    console.log(`Server running on port localhost ${PORT}`)
})


    // "test": "echo \"Error: no test specified\" && exit 1",
    // "watch": "nodemon index.js",
    // "build:ui": "rm -rf build && cd ../habit-tracker && npm install && npm run build && cp -r build ../backend"