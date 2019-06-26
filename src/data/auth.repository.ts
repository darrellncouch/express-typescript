import { Result } from "../types/Result";
import { createConnection, Connection } from "typeorm";
import { Role } from "../types/enteties/Role";
import { Connections } from "./connection";

export default class AuthRepository {
    
    public db = new Connections();

    constructor() {
    }


    

    public async getRolesByIds(ids: Array<any>) : Promise<Result<Array<Role>>>{
        
        try{

            const result = await this.db.auth.role.findByIds([1]);

            console.log(result);
            if(result.length == 0){
                return Result.fail<Array<Role>>("No results found.");
            }
            
            return Result.ok(result);
        }
        catch(error){
            return Result.fail<Array<Role>>(error);
        }

        
    }
}