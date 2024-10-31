const { test, expect } = require('@playwright/test');
import { ProductClient } from '../../common/productClient';
import { SignInUser } from '../../model/SignInUser';
import { LoggedInUser } from '../../model/LoggedInUser';
import { env } from 'process';
const Ajv = require("ajv");

test.describe("User tests", () => {
    test("Create user", async () => {
        const ajv = new Ajv();

        var productClient = new ProductClient();

        let userData = new SignInUser("user", "username@levi", "Password1*", 
            "2", "2", "2002", "firstName", "lastName", "company", "adress1", 
            "adress2", "United States", "state", "city", "zipcode", "mobile_number"
        );

        var response = await productClient.createAccount(userData);

        await expect(response.responseCode).toEqual(201);

        response = await productClient.getUserDetailByEmail(userData.email);

        const schema = require("../../utils/userSchema.json");

        await expect(ajv.validate(schema, response)).toBeTruthy();

        await expect(response.user.first_name).toEqual(userData.firstName);
        
        await expect(response.user.last_name).toEqual(userData.lastName);
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

        console.log(response);

        await expect(response.responseCode).toEqual(200);
    })

    test("deleteAccount", async () => {

        var productClient = new ProductClient();
        
        let userData = new LoggedInUser("username@levi", "Password1*", "user");

        var response = await productClient.deleteAccount(userData);

        await expect(response.responseCode).toEqual(200);
    })

    test("PUT METHOD To Update User Account", async () => {
        const ajv = new Ajv();
        
        var productClient = new ProductClient();

        let userData = new SignInUser("user", "username@levi", "Password1*", 
            "2", "2", "2001", "firstName", "lastName", "company", "adress1", 
            "adress2", "United States", "state", "city", "zipcode", "mobile_number"
        );
        
        var response = await productClient.updateAccount(userData);

        await expect(response.responseCode).toEqual(200);

        response = await productClient.getUserDetailByEmail(userData.email);

        const schema = require("../../utils/userSchema.json");

        await expect(ajv.validate(schema, response)).toBeTruthy();

        await expect(response.user.first_name).toEqual(userData.firstName);
        
        await expect(response.user.last_name).toEqual(userData.lastName);
    })
})