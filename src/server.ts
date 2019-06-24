import App from "./app"
import { Bootstrapper } from "./bootstrapper";
import { Router } from "express";
const bootstrapper = new Bootstrapper();

const router = Router();

bootstrapper.registerControllers(router);

const app = new App(
    router,
    8080
);

app.listen();