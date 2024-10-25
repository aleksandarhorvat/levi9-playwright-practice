const { test, expect } = require('@playwright/test');
import { LoggedInUser } from '../model/LoggedInUser';
import { UserData } from '../model/SignInUser'
import {LoginPage} from '../pages/loginPage'

test.describe("Login User with correct email and password", () => {
    test("Login User with correct email and password", async ({page}) => {
        let loginPage = new LoginPage(page);

        await loginPage.openApp();

        await expect(page).toHaveURL(loginPage.getApplicationUrl());

        await loginPage.linkSingupLogin.click();

        await expect(loginPage.loginToAccount).toHaveText("Login to your account");

        var userData = new LoggedInUser("username@levi99", "Password1*", "user");

        await loginPage.login(userData.email, userData.password);

        await page.getByText(" Logged in as " + userData.email).isVisible();

        await loginPage.deleteAccount();
    })
})