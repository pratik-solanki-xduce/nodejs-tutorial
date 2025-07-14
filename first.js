const http = require("http")

const server = http.createServer((req, res) => {
    //   res.writeHead(200, { "Content-Type": "text/plain" })
    //   res.end("Hello, World!\n")
    console.log(`Request received: ${req.method} ${req.url}`)
    console.log(`Headers: ${JSON.stringify(req.headers)}`)
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200)
        res.write("<html>")
        res.write("<head><title>Home Page</title></head>")
        res.write("<body><h1>Welcome to the Home Page</h1></body>")
        res.write("</html>")
        res.end()
    } else if (req.url === "/about") {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200)
        res.write("<html>")
        res.write("<head><title>About Page</title></head>")
        res.write("<body><h1>About Page</h1></body>")
        res.write("</html>")
        res.end()
    } else {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(404)
        res.write("<html>")
        res.write("<head><title>404 Not Found</title></head>")
        res.write("<body><h1>404 Not Found</h1></body>")
        res.write("</html>")
        res.end()
    }
})

const PORT = 3000

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`)
})