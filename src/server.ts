import App from "./app"
import { DIBootstrapper } from "./diBootstrapper";
import { Router } from "express";
import { Role } from "./types/enteties/Role";
const diBootstrapper = new DIBootstrapper();

const router = Router();

diBootstrapper.registerControllers(router);

const app = new App(
    router,
    8080
);

app.listen();