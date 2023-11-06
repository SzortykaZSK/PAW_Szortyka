import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { APIRouter } from './routes/api';
import { MysqlError } from 'mysql';
import { connectionService } from './services/databaseService';


dotenv.config();

const app: Express = express();
const port =3000;

app.use('/public', express.static(path.join(__dirname, '..' ,'public')))
app.use(express.urlencoded({ extended: true }))
app.use('/api', APIRouter);

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../src/content/html', "index.html"));
});

app.get('/kontakt', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../src/content/html', "contact.html"));
});

app.post('/kontakt', (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);

  connectionService.query(`INSERT INTO formData(name, email, theme, content) VALUES('${body.name}', '${body.email}', '${body.theme}', '${body.content}') `, 
  (err: MysqlError, result: any) => {
    if (err) throw err;
    console.log('values added to database');
  });

  res.redirect(302, '/');
})

app.listen(port, () => {
  console.log(`running at http://localhost:${port}`);
});