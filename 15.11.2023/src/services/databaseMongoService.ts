import { MongoClient, ServerApiVersion } from 'mongodb';

interface itemProps {
  name?: string;
  email: string;
  theme: string;
  content: string;
}

class MongoService {

  url: string = "mongodb+srv://mateuszszortyka:pass123@cluster0.kqjfqjb.mongodb.net/?retryWrites=true&w=majority";

  createCollection = async () => {
    console.log('Trying to connect to the database');
    try {
      const db = await MongoClient.connect(this.url);
      const dbo = db.db('mydb');
      try {
        await dbo.createCollection('contact');
        console.log('Collection created');
      } catch (e) {
        throw e;
      }
      await db.close();
    } catch (e) {
      throw e;
    }
  }

  addToDataBase = async (item: itemProps) => {
    try {
      const db = await MongoClient.connect(this.url);
      const dbo = db.db('mydb');
      if(item.name === "") delete item.name
      try {
        await dbo.collection('contact').insertOne(item);
        console.log('1 document created');
      } catch (e) {
        throw e;
      }
      await db.close();
    } catch (e) {
      throw e;
    }
  }
}

export { MongoService };
