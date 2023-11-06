"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIRouter = void 0;
const express_1 = require("express");
// import { students } from "../../public/API/students";
// import { subjects } from "../../public/API/subjects";
const databaseService_1 = require("../services/databaseService");
const router = (0, express_1.Router)();
exports.APIRouter = router;
const links = [
    {
        url: "127.0.0.1:3000/api/students",
        description: "Lista studentów"
    },
    {
        url: "127.0.0.1:3000/api/subjects",
        description: "Lista przedmiotów szkolnych"
    },
];
router.get('/', (req, res) => {
    res.json(links);
});
router.get('/students', (req, res) => {
    databaseService_1.connectionService.query('SELECT * FROM students', (err, result) => {
        if (err) {
            res.sendStatus(404);
            throw err;
        }
        res.json(JSON.stringify(result));
    });
});
router.get('/students/:id', (req, res) => {
    databaseService_1.connectionService.query(`SELECT * FROM students WHERE id=${Number(req.params.id)}`, (err, result) => {
        if (err || result.length === 0) {
            res.sendStatus(404);
            console.log(err);
        }
        res.json(JSON.stringify(result));
    });
});
router.get('/subjects', (req, res) => {
    databaseService_1.connectionService.query('SELECT * FROM subjects', (err, result) => {
        if (err) {
            res.sendStatus(404);
            throw err;
        }
        res.json(JSON.stringify(result));
    });
});
router.get('/subjects/:id', (req, res) => {
    databaseService_1.connectionService.query(`SELECT * FROM subjects WHERE id=${Number(req.params.id)}`, (err, result) => {
        if (err || result.length === 0) {
            res.sendStatus(404);
            console.log(err);
        }
        res.json(JSON.stringify(result));
    });
});
