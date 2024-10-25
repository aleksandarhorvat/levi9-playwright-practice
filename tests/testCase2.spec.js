const { test, expect } = require('@playwright/test');
import { LoggedInUser } from '../model/LoggedInUser';
import {LoginPage} from '../pages/loginPage'

test.describe("Login User with correct email and password", () => {
    test("Login User with correct email and password", async ({page}) => {
        let loginPage = new LoginPage(page);

        await loginPage.openApp();

        await expect(page).toHaveURL(loginPage.getApplicationUrl());

        await loginPage.linkSingupLogin.click();

        await expect(loginPage.loginToAccount).toHaveText("Login to your account");

        var userData = new LoggedInUser("username@levi9", "Password1*", "user");

        await loginPage.login(userData.email, userData.password);

        await page.getByText(" Logged in as " + userData.username).isVisible();

        await loginPage.deleteAccount();
    })
})