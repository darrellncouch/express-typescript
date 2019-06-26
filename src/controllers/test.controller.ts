import Controller from "../types/baseClasses/controller";
import path from "path";
import { Router, Request, Response } from "express";
import AuthManager from "../logic/auth.manager";

export default class TestController implements Controller {
    public route = "/api";

    constructor(
        private readonly authManager: AuthManager,
        public router: Router
    ){
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get(this.route, this.testRoute);
    }

    public testRoute = async (req: Request, res: Response) => {
        
        //auth check here 
        
        const result = await this.authManager.getSomething([1]);

        res.send(result);
    }
}