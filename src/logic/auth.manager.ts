import { AuthRepository } from "../data/auth.repository";
import { Result } from "../types/Result";


export class AuthManager {

    constructor(private readonly authRepo : AuthRepository){

    }


    public async getSumthin(ids: Array<any>): Promise<Result<Array<any>>>{

        if(ids == null || ids.length == 0)
            return Result.fail<Array<any>>('Missing Ids');

        return await this.authRepo.getSumthin(ids);

    }

    
}