import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { APIRouter } from './routes/api';
import { MysqlError } from 'mysql';
import { PrismaConnectionService } from './services/databaseService';
import { MongoService } from './services/databaseMongoService';

dotenv.config();

const app: Express = express();
const port =3000;

const prismaConnection = new PrismaConnectionService();
const mongoService = new MongoService();

//mongoService.createCollection();

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

  mongoService.addToDataBase(body);

  res.redirect(302, '/');
})

app.listen(port, () => {
  console.log(`running at http://localhost:${port}`);
});