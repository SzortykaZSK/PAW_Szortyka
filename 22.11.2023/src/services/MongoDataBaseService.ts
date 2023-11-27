import {MONGO_CLIENT_EVENTS, MongoClient, ServerApiVersion} from 'mongodb'

class MongoDBService{
    private url : string = "mongodb+srv://mateuszszortyka:pass123@cluster0.kqjfqjb.mongodb.net/?retryWrites=true&w=majority"

    addToDataBase = async (name:string, item: any) => {
        try {
          const db = await MongoClient.connect(this.url)
          const dbo = db.db('blog_db');
          try {
            await dbo.collection('untyped_data').insertOne(item);
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

export {MongoDBService}