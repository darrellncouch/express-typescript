
import "reflect-metadata";
import { createConnection } from "typeorm";

export const db = {
    auth: createConnection({
             type: "postgres",
             host: "localhost",
             port: 5432,
             username: "postgres",
             password: "dncouch3",
             database: "auth",
             entities: [],
             synchronize: true,
             logging: false})
}