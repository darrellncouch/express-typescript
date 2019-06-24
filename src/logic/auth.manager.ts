import { AuthRepository } from "../data/auth.repository";
import { Result } from "../types/Result";
import { Role } from "../types/enteties/Role";


export class AuthManager {

    constructor(private readonly authRepo : AuthRepository){

    }


    public async getSumthin(ids: Array<any>): Promise<Result<Array<Role>>>{

        if(ids == null || ids.length == 0)
            return Result.fail<Array<Role>>('Missing Ids');

        return await this.authRepo.getSumthin(ids);

    }

    
}