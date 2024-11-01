const { test, expect } = require('@playwright/test');
import {LoginPage} from '../../pages/loginPage'
import { LoggedInUser } from '../../model/LoggedInUser';

test.describe("Login User with incorrect email and password", () => {
    test("Login User with incorrect email and password", async ({page}) => {
        let loginPage = new LoginPage(page);

        await loginPage.openApp();

        await expect(page).toHaveURL(loginPage.getApplicationUrl());

        await loginPage.linkSingupLogin.click();

        await expect(loginPage.loginToAccount).toHaveText("Login to your account");

        var userData = new LoggedInUser(env.email, env.password, env.name);

        await loginPage.login(userData.email, userData.password);

        await page.getByText("Your email or password is incorrect!").isVisible();
    })
})