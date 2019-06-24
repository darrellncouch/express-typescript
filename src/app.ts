import express, { Router } from "express";
import Controller from "./types/baseClasses/controller";
import bodyParser from "body-parser";

export default class App {
    public app: express.Application;
    public port: number;

    constructor(router:  Router, port: number){
        this.app = express();
        this.port = port;

        this.initializeMiddleWares(router);

    }

    private initializeMiddleWares(router: Router): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(express.static(`${__dirname}/public`));
        this.app.use('/', router);
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`App listening on ${this.port}`);
        })
    }


}