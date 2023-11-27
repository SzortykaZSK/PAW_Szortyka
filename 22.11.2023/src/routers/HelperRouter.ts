import { Router, Request, Response } from "express"
import path from "path"
import { PrismaConnectionService } from "../services/DataBaseService"


class HelperRouter{
    router = Router()
    dbService = new PrismaConnectionService()

    constructor(){
        this.router.get('/', (req:Request, res:Response)=>{
            console.log(path.join(__dirname, '../html', "index.html"))
            res.sendFile(path.join(__dirname, '../html', "index.html"))
        })
        this.router.get('/:table',(req:Request, res:Response)=>{
            this.dbService.getAll(req.params.table).then((result) =>{
                if(!isNaN(result)){
                    if(result == 404)
                    console.log('404')
                    res.sendFile(path.join(__dirname, '../html', "404.html"))
                }
                else
                    res.json(result)
            })
        })
        this.router.get('/:table/:id',(req:Request, res:Response)=>{
            this.dbService.getByID(req.params.table,Number(req.params.id)).then((result:JSON)=>{
                res.json(result)
            })
        })
        this.router.post('/:table',(req:Request, res:Response)=>{
            console.log(req.body);
            this.dbService.addToTable(req.params.table, Object(req.body)).then(()=>{
                res.status(302)
                res.redirect('/');
            })
        })
        this.router.patch('/:table/:id',(req:Request, res:Response)=>{
            console.log(req.body);
            this.dbService.updateById(req.params.table,Number(req.params.id), Object(req.body)).then(()=>{
                res.status(302)
                res.redirect('/');
            })
        })
        this.router.delete('/:table/:id',(req:Request, res:Response)=>{
            console.log(req.body);
            this.dbService.deleteById(req.params.table,Number(req.params.id)).then(()=>{
                res.status(302)
                res.redirect('/');
            })
        })

    }
}

const router = new HelperRouter().router;
export {router as HelperRouter};