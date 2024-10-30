const { test, expect } = require('@playwright/test');
import {LoginPage} from '../pages/loginPage'
import { LoggedInUser } from '../model/LoggedInUser';

test.describe("Logout User", () => {
    test("Logout User", async ({page}) => {
        let loginPage = new LoginPage(page);

        await loginPage.openApp();

        await expect(page).toHaveURL(loginPage.getApplicationUrl());

        await loginPage.linkSingupLogin.click();

        await expect(loginPage.loginToAccount).toHaveText("Login to your account");

        var userData = new LoggedInUser("aca@a", "aca", "aca");

        await loginPage.login(userData.email, userData.password);

        await page.getByText(" Logged in as " + userData.username).isVisible();

        await loginPage.logoutButton.click();

        await expect(page).toHaveURL("https://www.automationexercise.com/login");
    })
})