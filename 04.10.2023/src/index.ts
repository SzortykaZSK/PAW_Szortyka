import * as http from 'http'

import { readFile, writeFile } from 'fs/promises';

const hostname:string = '127.0.0.1';
const port:number = 3000;

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

const server:http.Server<typeof http.IncomingMessage, typeof http.ServerResponse> = http.createServer(async (req:http.IncomingMessage, res:http.ServerResponse) => {
  const url:string|undefined = req.url;

  const method:string|undefined = req.method;

  if(url === '/'){
    res.statusCode = 200;

    const html = await readFile('./html/index.html');

    res.setHeader('content-type', 'text/html');
    res.write(html);
    res.end();
  }
  else if(url === '/kontakt' && method === 'POST'){
    const body: Buffer[] = [];

    req.on('data',(chunk:Buffer)=>{
      console.log(chunk.toString());

      body.push(chunk);
    })

    req.on('end', async ()=>{
      const parsedBody:string = Buffer.concat(body).toString();

      const message:string = parsedBody.split('=', )[1];

      await writeFile(`contact/message-${Date.now().toString()}.txt`, message);

      res.statusCode = 302;

      res.setHeader('Location','/dziekujemy');

      return res.end();
    })
  }
  else if(url === '/dziekujemy'){
    res.statusCode = 200;

    const html = await readFile('./html/thankYouPage.html');

    res.setHeader('content-type', 'text/html');
    res.write(html);
    res.end();
  }
  else if (url === '/api') {
    res.statusCode = 200;

    const api = JSON.stringify(API_VALUE);

    res.setHeader('content-type', 'application/json');

    res.end(api);
  }
  else{
    res.statusCode = 404;

    const info:string = "404 NOT FOUND";

    res.setHeader('content-type', 'application/json');

    res.end(JSON.stringify(info));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});