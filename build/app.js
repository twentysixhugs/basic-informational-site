import express from 'express';
import path from 'path';
var app = express();
var port = Number(process.env.PORT) || 3000;
var __dirname = path.resolve();
function sendView(res, viewFileName) {
    try {
        res.sendFile(path.join(__dirname, "./views/".concat(viewFileName)));
    }
    catch (err) {
        res.status(500);
        res.send('Something went wrong');
    }
}
app.get('/', function (req, res) {
    res.status(200);
    sendView(res, 'index.html');
});
app.get('/about', function (req, res) {
    res.status(200);
    sendView(res, 'about.html');
});
app.get('/contact-me', function (req, res) {
    res.status(200);
    sendView(res, 'contact-me.html');
});
app.get('*', function (req, res) {
    res.status(404);
    sendView(res, '404.html');
});
app.listen(port, function () {
    console.log("The server is running at ".concat(port));
});
//# sourceMappingURL=app.js.map