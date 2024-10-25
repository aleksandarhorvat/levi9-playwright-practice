const { test, expect } = require('@playwright/test');
import { UserData } from '../model/userData'
import {LoginPage} from '../pages/loginPage'

test.describe("Register User", () => {

    test("Register User", async ({page}) => {
        let userData = new UserData("user", "username@levi", "Password1*", 
            "2", "2", "2002", "firstName", "lastName", "company", "adress1", 
            "adress2", "United States", "state", "city", "zipcode", "mobile_number"
        );
        let loginPage = new LoginPage(page, userData.username);

        await loginPage.openApp();

        await expect(page).toHaveURL(loginPage.getApplicationUrl());

        await loginPage.linkSingupLogin.click();

        await expect(loginPage.newUserSignUp).toHaveText("New User Signup!");

        await loginPage.signup(userData.username, userData.email);

        await expect(loginPage.accountInformation).toHaveText("Enter Account Information");

        await loginPage.signupData(userData);

        await expect(loginPage.accountCreated).toHaveText("Account Created!");

        await loginPage.continueButton.click();

        await expect(loginPage.loggedInAs).toHaveText(" Logged in as " + userData.username);

        await loginPage.deleteAccount();
    })

})