const { test, expect } = require('@playwright/test');
import { ProductClient } from '../../common/productClient';
import { SignInUser } from '../../model/SignInUser';
import { LoggedInUser } from '../../model/LoggedInUser';
import { env } from 'process';

test.describe("User tests", () => {
    test("Create user", async () => {

        var productClient = new ProductClient();

        let userData = new SignInUser("user", "username@levi", "Password1*", 
            "2", "2", "2002", "firstName", "lastName", "company", "adress1", 
            "adress2", "United States", "state", "city", "zipcode", "mobile_number"
        );

        var response = await productClient.createAccount(userData);

        await expect(response.responseCode).toEqual(201);
    })

    test("Verify login", async () => {

        var productClient = new ProductClient();
        
        let userData = new LoggedInUser("username@levi", "Password1*", "user");

        var response = await productClient.verifyLogin(userData);

        await expect(response.responseCode).toEqual(200);
    })

    test("getUserDetailByEmail", async () => {

        var productClient = new ProductClient();
        
        let userData = new LoggedInUser("username@levi", "Password1*", "user");

        var response = await productClient.getUserDetailByEmail("username@levi");

        await expect(response.responseCode).toEqual(200);
    })

    test("deleteAccount", async () => {

        var productClient = new ProductClient();
        
        let userData = new LoggedInUser("username@levi", "Password1*", "user");

        var response = await productClient.deleteAccount(userData);

        await expect(response.responseCode).toEqual(200);
    })
})