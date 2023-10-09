"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const http = __importStar(require("http"));
const promises_1 = require("fs/promises");
const hostname = '127.0.0.1';
const port = 3000;
const API_VALUE = [
    {
        id: 1,
        name: 'Kowalski',
    },
    {
        id: 2,
        name: 'Nowak',
    },
];
const server = http.createServer((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.statusCode = 200;
        const html = yield (0, promises_1.readFile)('./html/index.html');
        res.setHeader('content-type', 'text/html');
        res.write(html);
        res.end();
    }
    else if (url === '/kontakt' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk.toString());
            body.push(chunk);
        });
        req.on('end', () => __awaiter(void 0, void 0, void 0, function* () {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            yield (0, promises_1.writeFile)(`contact/message-${Date.now().toString()}.txt`, message);
            res.statusCode = 302;
            res.setHeader('Location', '/dziekujemy');
            return res.end();
        }));
    }
    else if (url === '/dziekujemy') {
        res.statusCode = 200;
        const html = yield (0, promises_1.readFile)('./html/thankYouPage.html');
        res.setHeader('content-type', 'text/html');
        res.write(html);
        res.end();
    }
    else if (url === '/api') {
        res.statusCode = 200;
        const api = JSON.stringify(API_VALUE);
        res.setHeader('content-type', 'application/json');
        res.end(api);
    }
    else {
        res.statusCode = 404;
        const info = "404 NOT FOUND";
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify(info));
    }
}));
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
