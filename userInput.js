const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html><head><title>Form</title></head><body>
            <h1>Enter Details:</h1>
            <form method="POST" action="/submit">
                <input name="username" placeholder="Your name"><br>
                <label>Male</label><input type="radio" name="gender" value="male">
                <label>Female</label><input type="radio" name="gender" value="female"><br>
                <input type="submit">
            </form>
            </body></html>
        `);
    } else if (req.url === '/submit' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const params = new URLSearchParams(body);
            const username = params.get('username');
            const gender = params.get('gender');
            fs.appendFileSync('user.txt', `${username} - ${gender}\n`);
            res.writeHead(302, { Location: '/' });
            res.end();
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page not found</h1>');
    }
})


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});