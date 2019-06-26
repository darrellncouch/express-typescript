import { TestController } from "./controllers/controllers";
import Controller from "./types/baseClasses/controller";
import AuthManager from "./logic/auth.manager";
import AuthRepository from "./data/auth.repository";
import { Router } from "express";

export class DIBootstrapper {

    public registerControllers(router: Router): void{
        new TestController(this.authManager, router)
    }

    //Repos
    private authRepo = new AuthRepository();

    //Managers
    private authManager = new AuthManager(this.authRepo);


    
}