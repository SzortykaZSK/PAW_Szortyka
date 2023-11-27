"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDBService = void 0;
const mongodb_1 = require("mongodb");
class MongoDBService {
    constructor() {
        this.url = "mongodb+srv://mateuszszortyka:pass123@cluster0.kqjfqjb.mongodb.net/?retryWrites=true&w=majority";
        this.addToDataBase = async (name, item) => {
            try {
                const db = await mongodb_1.MongoClient.connect(this.url);
                const dbo = db.db('blog_db');
                try {
                    await dbo.collection('untyped_data').insertOne(item);
                    console.log('1 document created');
                }
                catch (e) {
                    throw e;
                }
                await db.close();
            }
            catch (e) {
                throw e;
            }
        };
    }
}
exports.MongoDBService = MongoDBService;
