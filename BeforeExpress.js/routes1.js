const fs = require('fs');

const request = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write("<html>");
        res.write("<head></head>");
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === "/message" && method === "POST") {
        console.log("here");
        const body = [];
        //add event listener to the incoming data
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        //Add a return to get this piece of code executed first, rather than wait for the BOTTOM
        // ES6 function is a callback function
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            console.log(message)
            // (err) will be executed when it done write file
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader("Location", '/');
                return res.end();
            });

        });

    }
    // BOTTOM
    res.setHeader("Content-type", "This is testing");
    res.write('<html>');
    res.write('<head></head>');
    res.write('<body>This is nodejS Server</body>');
    res.write('</html>');
}

//node module system
module.exports = {
    request,
    sometext: "some text"
};
