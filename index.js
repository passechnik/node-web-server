const { createServer } = require("http")
const { readFileSync } = require("fs")
// const server = createServer(handleRequest)
const server = createServer(handleRequest)

server.listen(1000)

function handleRequest(request, response) {
    try {
        const file = readFileSync(request.url.slice(1) || 'index.html')
        response.end(file)
    } catch {
        response.statusCode = 404
        response.end(request.url + ' not found')
    }

}

// require("http").createServer((req, res) => res.end('Hello World')).listen(2000)
