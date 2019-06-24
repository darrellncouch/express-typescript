import { Result } from "../types/Result";

export class AuthRepository {
    
    constructor() {

    }


    public async getSumthin(ids: Array<any>) : Promise<Result<Array<any>>>{
        
        return Result.ok(["it", "worked"]);
    }
}