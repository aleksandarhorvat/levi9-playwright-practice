const { test, expect } = require('@playwright/test');
import { SignInUser } from '../../model/SignInUser'
import {LoginPage} from '../../pages/loginPage'
import { env } from 'process';

test.describe("Register User", () => {

    test("Register User", async ({page}) => {
        let userData = new SignInUser(env.name, env.email, env.password, 
            env.birth_day, env.birth_month, env.birth_year, env.firstname, env.lastname, env.company, env.address1, 
            env.address2, env.country, env.state, env.city, env.zipcode, env.mobile_number
        );
        let loginPage = new LoginPage(page);

        await loginPage.openApp();

        await expect(page).toHaveURL(loginPage.getApplicationUrl());

        await loginPage.linkSingupLogin.click();

        await expect(loginPage.newUserSignUp).toHaveText("New User Signup!");

        await loginPage.signup(userData.username, userData.email);

        await expect(loginPage.accountInformation).toHaveText("Enter Account Information");

        await loginPage.signupData(userData);

        await expect(loginPage.accountCreated).toHaveText("Account Created!");

        await loginPage.continueButton.click();

        await page.getByText(" Logged in as " + userData.username).isVisible();

        await loginPage.deleteAccount();
    })

})