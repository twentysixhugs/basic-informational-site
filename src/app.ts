import express, { Response } from 'express';
import path from 'path';

const app = express();
const port = Number(process.env.PORT) || 3000;

const __dirname = path.resolve();

function sendView(res: Response, viewFileName: string) {
  try {
    res.sendFile(path.join(__dirname, `./views/${viewFileName}`));
  } catch (err) {
    res.status(500);
    res.send('Something went wrong');
  }
}

app.get('/', (req, res) => {
  res.status(200);
  sendView(res, 'index.html');
});

app.get('/about', (req, res) => {
  res.status(200);

  sendView(res, 'about.html');
});

app.get('/contact-me', (req, res) => {
  res.status(200);

  sendView(res, 'contact-me.html');
});

app.get('*', (req, res) => {
  res.status(404);

  sendView(res, '404.html');
});

app.listen(port, () => {
  console.log(`The server is running at ${port}`);
});
