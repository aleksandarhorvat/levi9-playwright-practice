const { test, expect } = require('@playwright/test');
import { ProductClient } from '../../common/productClient';
import { SignInUser } from '../../model/SignInUser';
import { LoggedInUser } from '../../model/LoggedInUser';
import { env } from 'process';
const Ajv = require("ajv");

test.describe.configure({ mode: 'serial' });

test.describe("User tests", () => {
    test("Create user", async () => {
        const ajv = new Ajv();

        var productClient = new ProductClient();

        let userData = new SignInUser(env.name, env.email, env.password, 
            env.birth_day, env.birth_month, env.birth_year, env.firstname, env.lastname, env.company, env.address1, 
            env.address2, env.country, env.state, env.city, env.zipcode, env.mobile_number
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
        
        var userData = new LoggedInUser(env.email, env.password, env.name);

        var response = await productClient.verifyLogin(userData);

        await expect(response.responseCode).toEqual(200);
    })

    test("getUserDetailByEmail", async () => {

        var productClient = new ProductClient();
        
        var userData = new LoggedInUser(env.email, env.password, env.name);

        var response = await productClient.getUserDetailByEmail(env.email);

        console.log(response);

        await expect(response.responseCode).toEqual(200);
    })

    test("PUT METHOD To Update User Account", async () => {
        const ajv = new Ajv();
        
        var productClient = new ProductClient();

        let userData = new SignInUser(env.name, env.email, env.password, 
            env.birth_day, env.birth_month, env.birth_year, env.firstname, env.lastname, env.company, env.address1, 
            env.address2, env.country, env.state, env.city, env.zipcode, env.mobile_number
        );
        
        var response = await productClient.updateAccount(userData);

        await expect(response.responseCode).toEqual(200);

        response = await productClient.getUserDetailByEmail(userData.email);

        const schema = require("../../utils/userSchema.json");

        await expect(ajv.validate(schema, response)).toBeTruthy();

        await expect(response.user.first_name).toEqual(userData.firstName);
        
        await expect(response.user.last_name).toEqual(userData.lastName);
    })

    test("deleteAccount", async () => {

        var productClient = new ProductClient();
        
        var userData = new LoggedInUser(env.email, env.password, env.name);

        var response = await productClient.deleteAccount(userData);

        await expect(response.responseCode).toEqual(200);
    })
})