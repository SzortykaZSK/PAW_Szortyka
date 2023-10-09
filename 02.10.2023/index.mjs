import * as http from 'http';

import { readFile } from 'fs/promises';

const hostname = '127.0.0.1';
const port = 3000;

const API_VALUE = [
  {
    id: 1,
    name: 'Kowalski',
  },
  {
    id: 2,
    name: 'Nowak',
  },
];

const server = http.createServer(async (req, res) => {
  const url = req.url;

  if (url === '/') {
    res.statusCode = 200;

    const api = await JSON.stringify(API_VALUE);

    res.setHeader('content-type', 'application/json');

    res.end(api);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});