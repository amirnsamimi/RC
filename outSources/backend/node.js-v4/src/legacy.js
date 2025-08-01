import http from "http"

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("Hello, World!")
    }


})


server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
}) 