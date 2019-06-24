import { createConnection, Connection } from "typeorm";
import { Role } from "../types/enteties/Role";
import { RoleObject } from "../types/enteties/RoleObject";

export class Connections {

    public authConnection : Connection;

    public auth = {
        role: this.authConnection.getRepository(Role),
        roleObject: this.authConnection.getRepository(RoleObject)
    }

    constructor(){
        this.initializeConnection();
    }

    private async initializeConnection(): Promise<void> {
        this.authConnection = await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "dncouch3",
            database: "auth",
            entities: [
                Role
            ],
            synchronize: true,
            logging: false
        });

        
    }
}