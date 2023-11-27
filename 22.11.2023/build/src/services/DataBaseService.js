"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaConnectionService = void 0;
const client_1 = require("@prisma/client");
const MongoDataBaseService_1 = require("./MongoDataBaseService");
const prisma = new client_1.PrismaClient();
const mongoDBService = new MongoDataBaseService_1.MongoDBService();
class PrismaConnectionService {
    constructor() {
        this.modelMap = {
            user: prisma.user,
            post: prisma.post,
            comment: prisma.comment,
            tag: prisma.tag,
            profile: prisma.profile,
            tagsOnPosts: prisma.tagsOnPosts,
        };
        this.getAll = async (tableName) => {
            const model = this.modelMap[tableName];
            if (!model) {
                console.warn(`Invalid table name: ${tableName}`);
                return 404;
            }
            return await model.findMany({});
        };
        this.getByID = async (tableName, _id) => {
            const model = this.modelMap[tableName];
            if (!model) {
                console.warn(`Invalid table name: ${tableName}`);
                return 404;
            }
            return await model.findUnique({
                where: {
                    id: _id,
                },
            });
        };
        this.addToTable = async (tableName, data) => {
            const model = this.modelMap[tableName];
            if (!model) {
                console.warn(`Invalid table name. Send data to MongoDB`);
                return await mongoDBService.addToDataBase(tableName, data);
            }
            return await model.create({
                data: {
                    ...data,
                },
            });
        };
        this.updateById = async (tableName, id, data) => {
            const model = this.modelMap[tableName];
            if (!model) {
                console.warn(`Invalid table name: ${tableName}`);
                return 404;
            }
            return await model.update({
                where: {
                    id: id,
                },
                data: {
                    ...data,
                },
            });
        };
        this.deleteById = async (tableName, id) => {
            const model = this.modelMap[tableName];
            if (!model) {
                console.warn(`Invalid table name: ${tableName}`);
                return 404;
            }
            return await model.delete({
                where: {
                    id: id,
                },
            });
        };
    }
}
exports.PrismaConnectionService = PrismaConnectionService;
