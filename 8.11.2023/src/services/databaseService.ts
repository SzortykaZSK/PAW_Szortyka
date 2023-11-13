import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

// interface IDataStudentsProps{
//   data:{
//     name:String,
//     surname: String,
//     email: String,
//   }  
// }

class PrismaConnectionService{

  addValueToStudents = async function (_name:string, _surname:string, _email:string){
    await prisma.students.create({
      data: {
        name: _name,
        surname:_surname,
        email: _email
      }
    });
  }
  addValueToSubjects = async function (_name:string, _hourAWeek:number){
    await prisma.subjects.create({
      data: {
        name: _name,
        hourAWeek: _hourAWeek
      }
    });
  }
  addValueToformData = async function (_name:string, _theme:string, _email:string, _content:string){
    console.log("dodanie danych do bazy")
    await prisma.formData.create({
      data: {
        name: _name,
        email: _email,
        theme: _theme,
        content: _content
      }
    });
  }
  getAllStudents = async function(){return await prisma.students.findMany({})}
  getAllSubjects = async function(){return await prisma.subjects.findMany({})}
  getAllFormData = async function(){return await prisma.formData.findMany({})}

  getAllSubjectsByID = async function(_id:number){return await prisma.subjects.findMany({where: {
    id: _id
  }})}
  getAllStudentsByID = async function(_id:number){return await prisma.students.findMany({where: {
    id: _id
  }})}

}

export {PrismaConnectionService}


