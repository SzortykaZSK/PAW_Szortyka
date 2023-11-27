"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HelperRouter_1 = require("./routers/HelperRouter");
class MainRouter {
}
_a = MainRouter;
MainRouter.app = (0, express_1.default)();
MainRouter.port = 3000;
MainRouter.main = () => {
    _a.app.use(express_1.default.json());
    _a.app.use('/', HelperRouter_1.HelperRouter);
    _a.app.listen(_a.port, () => {
        console.log(`running at http://localhost:${_a.port}`);
    });
};
MainRouter.main();
