import { expect } from "chai";
import "mocha";
import { ImportMock, MockManager } from "ts-mock-imports";
import AuthRepository from "../../src/data/auth.repository";
import { Result } from "../../src/types/Result";
import AuthManager from "../../src/logic/auth.manager";
import { Role } from "../../src/types/enteties/Role";



describe("getSomething should return Result.fail if no params/empty array is passed in", ()=>{
    let mockRepo : MockManager<AuthRepository>;
    let authManager: AuthManager;

    beforeEach("Mock out dependencies", ()=> {
        mockRepo = ImportMock.mockClass(AuthRepository);
        authManager = new AuthManager(mockRepo);
    })

    afterEach('restore dependencies', function () {
        mockRepo.restore();
      });

    const role = [{id: 1, name: "TEST_NAME_1", description: "TEST_DESCRIPTION_!"}]
    const failure = Result.fail<Array<Role>>("Missing Ids");


    expect(authManager.getSomething(null)).to.equal(failure);
    expect(authManager.getSomething([])).to.equal(failure);
    

     
})