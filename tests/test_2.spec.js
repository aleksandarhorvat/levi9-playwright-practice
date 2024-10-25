const { test, expect } = require('@playwright/test');
import {LoginPage} from '../pages/loginPage'

test.describe("Test case 2", () => {

    test("Login User with correct email and password", async ({page}) => {

        //npx playwright test -g "Login User with correct email and password" --ui

        let loginPage = new LoginPage(page)

        //open application
        await loginPage.openApp()

        //verify that home page is visible successfully
        await expect(page).toHaveURL(loginPage.getApplicationUrl())

        //click on Singup/Login link
        await loginPage.linkSingupLogin.click()
        
        //Verify 'Login to your account' is visible
        await page.getByText("Login to your account").isVisible()
        
        //Enter correct email address and password and login
        await loginPage.login("ana1@ana.com", "ana+007")

        //Verify that 'Logged in as username' is visible
        await page.getByText(" Logged in as ana").isVisible()

        //logout 
        await loginPage.logout()

    })
})