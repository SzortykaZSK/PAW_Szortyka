import { Router } from "express";
// import { students } from "../../public/API/students";
// import { subjects } from "../../public/API/subjects";
import { connectionService } from '../services/databaseService';
import { createConnection, Connection, MysqlError } from 'mysql';


const router = Router();

interface IUrlProps {  
  url: string,
  description: string
}

const links: IUrlProps[] = [
  {
    url: "127.0.0.1:3000/api/students",
    description: "Lista studentów"
  },
  {
    url: "127.0.0.1:3000/api/subjects",
    description: "Lista przedmiotów szkolnych"
  },
]

router.get('/', (req, res) => {
  res.json(links);
})

router.get('/students', (req, res) => {
  connectionService.query('SELECT * FROM students', (err: MysqlError | null, result) => {
    if (err){
      res.sendStatus(404);
      throw err;
    } 
    res.json(JSON.stringify(result))
  })
})

router.get('/students/:id', (req, res) => {
  connectionService.query(`SELECT * FROM students WHERE id=${Number(req.params.id)}`, (err: MysqlError | null, result) => {
    if (err || result.length === 0){
      res.sendStatus(404);
      console.log(err);
    } 
    res.json(JSON.stringify(result))
  })
  
})

router.get('/subjects', (req, res) => {
  connectionService.query('SELECT * FROM subjects', (err: MysqlError | null, result) => {
    if (err){
      res.sendStatus(404);
      throw err;
    } 
    res.json(JSON.stringify(result))
  })
})

router.get('/subjects/:id', (req, res) => {
  connectionService.query(`SELECT * FROM subjects WHERE id=${Number(req.params.id)}`, (err: MysqlError | null, result) => {
    if (err || result.length === 0){
      res.sendStatus(404);
      console.log(err);
    } 
    res.json(JSON.stringify(result))
  })
})


export {router as APIRouter} //export modulu