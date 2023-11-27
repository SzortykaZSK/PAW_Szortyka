import { PrismaClient } from '@prisma/client'
import { MongoDBService } from './MongoDataBaseService';


const prisma = new PrismaClient()
const mongoDBService = new MongoDBService()
class PrismaConnectionService{
    private modelMap: { [key: string]: any } = {
      user: prisma.user,
      post: prisma.post,
      comment: prisma.comment,
      tag: prisma.tag,
      profile: prisma.profile,
      tagsOnPosts: prisma.tagsOnPosts,
    };

    getAll = async (tableName: string) =>{
        
        const model = this.modelMap[tableName];
      
        if (!model) {
          console.warn(`Invalid table name: ${tableName}`);
          return 404
        }
      
        return await model.findMany({})
    }

    getByID = async (tableName: string, _id: number) =>{

        const model = this.modelMap[tableName];
    
        if (!model) {
            console.warn(`Invalid table name: ${tableName}`);
            return 404
        }
    
        return await model.findUnique({
        where: {
            id: _id,
        },
        });
    }
    addToTable = async (tableName: string, data: any) =>{

        const model = this.modelMap[tableName];
      
        if (!model) {
          console.warn(`Invalid table name. Send data to MongoDB`)
          return await mongoDBService.addToDataBase(tableName, data)
        }
      
        return await model.create({
          data: {
            ...data,
          },
        });
      }
      updateById = async (tableName: string, id: number, data: any) =>{
      
        const model = this.modelMap[tableName];
      
        if (!model) {
          console.warn(`Invalid table name: ${tableName}`);
          return 404
        }
      
        return await model.update({
          where: {
            id: id,
          },
          data: {
            ...data,
          },
        });
      }
      deleteById = async (tableName: string, id: number) =>{      

        const model = this.modelMap[tableName];
      
        if (!model) {
          console.warn(`Invalid table name: ${tableName}`)
          return 404
        }
      
        return await model.delete({
          where: {
            id: id,
          },
        });
      }

}

export {PrismaConnectionService}


