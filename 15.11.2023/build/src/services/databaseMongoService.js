"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoService = void 0;
const mongodb_1 = require("mongodb");
class MongoService {
    constructor() {
        this.url = "mongodb+srv://mateuszszortyka:pass123@cluster0.kqjfqjb.mongodb.net/?retryWrites=true&w=majority";
        this.createCollection = () => __awaiter(this, void 0, void 0, function* () {
            console.log('Trying to connect to the database');
            try {
                const db = yield mongodb_1.MongoClient.connect(this.url);
                const dbo = db.db('mydb');
                try {
                    yield dbo.createCollection('contact');
                    console.log('Collection created');
                }
                catch (e) {
                    throw e;
                }
                yield db.close();
            }
            catch (e) {
                throw e;
            }
        });
        this.addToDataBase = (item) => __awaiter(this, void 0, void 0, function* () {
            try {
                const db = yield mongodb_1.MongoClient.connect(this.url);
                const dbo = db.db('mydb');
                if (item.name === "")
                    delete item.name;
                try {
                    yield dbo.collection('contact').insertOne(item);
                    console.log('1 document created');
                }
                catch (e) {
                    throw e;
                }
                yield db.close();
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.MongoService = MongoService;
