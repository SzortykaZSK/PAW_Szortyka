"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIRouter = void 0;
const express_1 = require("express");
const students_1 = require("../../public/API/students");
const subjects_1 = require("../../public/API/subjects");
const router = (0, express_1.Router)();
exports.APIRouter = router;
const links = [
    {
        link: "127.0.0.1:3000/api/students",
        description: "Lista studentów"
    },
    {
        link: "127.0.0.1:3000/api/subjects",
        description: "Lista przedmiotów szkolnych"
    },
];
router.get('/', (req, res) => {
    res.json(links);
});
router.get('/students', (req, res) => {
    res.json(students_1.students);
});
router.get('/students/:id', (req, res) => {
    if (students_1.students.length >= Number(req.params.id)) {
        res.json(students_1.students.find(x => x.id.toString() === req.params.id));
    }
    else {
        res.sendStatus(404);
        return 0;
    }
});
router.get('/subjects', (req, res) => {
    res.json(subjects_1.subjects);
});
router.get('/subjects/:id', (req, res) => {
    if (subjects_1.subjects.length >= Number(req.params.id)) {
        res.json(subjects_1.subjects.find(x => x.id.toString() === req.params.id));
    }
    else {
        res.sendStatus(404);
        return 0;
    }
});
