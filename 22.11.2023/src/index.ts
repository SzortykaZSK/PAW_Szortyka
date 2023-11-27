import express,{Express, Request, Response} from "express"
import { HelperRouter } from "./routers/HelperRouter"


class MainRouter{
    static app = express()
    static port = 3000

    static main = ()=> {
        this.app.use(express.json())
        this.app.use('/', HelperRouter)
        this.app.listen(this.port, ()=>{
            console.log(`running at http://localhost:${this.port}`)
        })
    }
}

MainRouter.main()
