import * as fs from 'fs';
import * as http from 'http';
var port = process.env.PORT || 3000;
var server = http.createServer(function (req, res) {
    var pathToView = './views';
    switch (req.url) {
        case '/':
            pathToView += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            pathToView += '/about.html';
            res.statusCode = 200;
            break;
        case '/contact-me':
            pathToView += '/contact-me.html';
            res.statusCode = 200;
            break;
        default:
            res.statusCode = 404;
            pathToView += '/404.html';
            break;
    }
    fs.readFile(pathToView, function (err, data) {
        if (err) {
            console.log(err);
            res.setHeader('Content-Type', 'text/plain');
            res.write('Something went wrong');
            res.statusCode = 500;
        }
        else {
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
        }
        res.end();
    });
});
server.listen(port, function () {
    console.log("Server is up and running at port ".concat(port, "."));
});
//# sourceMappingURL=index.js.map