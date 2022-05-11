import * as fs from 'fs';
import * as http from 'http';

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  let pathToView = './views';

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

  fs.readFile(pathToView, (err, data) => {
    if (err) {
      console.log(err);
      res.setHeader('Content-Type', 'text/plain');
      res.write('Something went wrong');
      res.statusCode = 500;
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, () => {
  console.log(`Server is up and running at port ${port}.`);
});
