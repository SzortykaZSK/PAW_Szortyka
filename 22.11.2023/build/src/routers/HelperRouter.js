"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperRouter = void 0;
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const DataBaseService_1 = require("../services/DataBaseService");
class HelperRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.dbService = new DataBaseService_1.PrismaConnectionService();
        this.router.get('/', (req, res) => {
            console.log(path_1.default.join(__dirname, '../html', "index.html"));
            res.sendFile(path_1.default.join(__dirname, '../html', "index.html"));
        });
        this.router.get('/:table', (req, res) => {
            this.dbService.getAll(req.params.table).then((result) => {
                if (!isNaN(result)) {
                    if (result == 404)
                        console.log('404');
                    res.sendFile(path_1.default.join(__dirname, '../html', "404.html"));
                }
                else
                    res.json(result);
            });
        });
        this.router.get('/:table/:id', (req, res) => {
            this.dbService.getByID(req.params.table, Number(req.params.id)).then((result) => {
                res.json(result);
            });
        });
        this.router.post('/:table', (req, res) => {
            console.log(req.body);
            this.dbService.addToTable(req.params.table, Object(req.body)).then(() => {
                res.status(302);
                res.redirect('/');
            });
        });
        this.router.patch('/:table/:id', (req, res) => {
            console.log(req.body);
            this.dbService.updateById(req.params.table, Number(req.params.id), Object(req.body)).then(() => {
                res.status(302);
                res.redirect('/');
            });
        });
        this.router.delete('/:table/:id', (req, res) => {
            console.log(req.body);
            this.dbService.deleteById(req.params.table, Number(req.params.id)).then(() => {
                res.status(302);
                res.redirect('/');
            });
        });
    }
}
const router = new HelperRouter().router;
exports.HelperRouter = router;
