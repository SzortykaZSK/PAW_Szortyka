import { Router } from "express";
// import { students } from "../../public/API/students";
// import { subjects } from "../../public/API/subjects";
import { PrismaConnectionService } from '../services/databaseService';


const router = Router();

const prismaConnection = new PrismaConnectionService();

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
  prismaConnection.getAllStudents().then((students) => {
    res.json(JSON.stringify(students));
  });
})

router.get('/formData', (req, res) => {
  prismaConnection.getAllFormData().then((students) => {
    res.json(JSON.stringify(students));
  });
})

router.get('/students/:id', (req, res) => {
  prismaConnection.getAllStudentsByID(Number(req.params.id)).then((students) => {
    res.json(JSON.stringify(students));
  });
})

router.get('/subjects', (req, res) => {
  prismaConnection.getAllSubjects().then((students) => {
    res.json(JSON.stringify(students));
  });
})

router.get('/subjects/:id', (req, res) => {
  prismaConnection.getAllSubjectsByID(Number(req.params.id)).then((students) => {
    res.json(JSON.stringify(students));
  });
})


export {router as APIRouter} //export modulu