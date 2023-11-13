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
exports.PrismaConnectionService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// interface IDataStudentsProps{
//   data:{
//     name:String,
//     surname: String,
//     email: String,
//   }  
// }
class PrismaConnectionService {
    constructor() {
        this.addValueToStudents = function (_name, _surname, _email) {
            return __awaiter(this, void 0, void 0, function* () {
                yield prisma.students.create({
                    data: {
                        name: _name,
                        surname: _surname,
                        email: _email
                    }
                });
            });
        };
        this.addValueToSubjects = function (_name, _hourAWeek) {
            return __awaiter(this, void 0, void 0, function* () {
                yield prisma.subjects.create({
                    data: {
                        name: _name,
                        hourAWeek: _hourAWeek
                    }
                });
            });
        };
        this.addValueToformData = function (_name, _theme, _email, _content) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("dodanie danych do bazy");
                yield prisma.formData.create({
                    data: {
                        name: _name,
                        email: _email,
                        theme: _theme,
                        content: _content
                    }
                });
            });
        };
        this.getAllStudents = function () {
            return __awaiter(this, void 0, void 0, function* () { return yield prisma.students.findMany({}); });
        };
        this.getAllSubjects = function () {
            return __awaiter(this, void 0, void 0, function* () { return yield prisma.subjects.findMany({}); });
        };
        this.getAllFormData = function () {
            return __awaiter(this, void 0, void 0, function* () { return yield prisma.formData.findMany({}); });
        };
        this.getAllSubjectsByID = function (_id) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield prisma.subjects.findMany({ where: {
                        id: _id
                    } });
            });
        };
        this.getAllStudentsByID = function (_id) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield prisma.students.findMany({ where: {
                        id: _id
                    } });
            });
        };
    }
}
exports.PrismaConnectionService = PrismaConnectionService;
