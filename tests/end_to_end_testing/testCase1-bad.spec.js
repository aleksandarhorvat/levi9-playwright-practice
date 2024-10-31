const { test, expect } = require('@playwright/test');

test.describe("Register User", () => {
    
    test("Register User", async ({page}) => {
        await page.goto("https://www.automationexercise.com/");
        await expect(page).toHaveURL("https://www.automationexercise.com/");
        await page.getByText(" Signup / Login").click();
        //await page.check("//h2[text()='New User Signup!']")
        //await expect(page.getByText("New User Signup!")).toHaveText("New User Signup!");
        //await expect(page.locator("div.signup-form").locator("h2")).toHaveText("New User Signup!");
        await expect(page.locator("//h2[text()='New User Signup!']")).toHaveText("New User Signup!");
        // const nameInput= await page.getByPlaceholder("Name");
        // const emailInput= await page.locator("[action='/signup'] [type='email']");
        // const submitButton= await page.locator("[action='/signup'] [type='submit']");
        await page.getByPlaceholder("Name").fill("A");
        await page.locator("[action='/signup'] [type='email']").fill("Nesto@a3");
        await page.locator("[action='/signup'] [type='submit']").click();
        
        await expect(page.getByText("Enter Account Information")).toHaveText("Enter Account Information");
        await page.locator("[id='password']").fill("Password1*");
        await page.locator("[id='days']").selectOption("2");
        await page.locator("[id='months']").selectOption("2");
        await page.locator("[id='years']").selectOption("2002");
        await page.locator("[id='newsletter']").check();
        await page.locator("[id='optin']").check();
        var name = "A";
        await page.locator("[id='first_name']").fill(name);
        await page.locator("[id='last_name']").fill("A");
        await page.locator("[id='company']").fill("A");
        await page.locator("[id='address1']").fill("A");
        await page.locator("[id='address2']").fill("A");
        await page.locator("[id='country']").selectOption("United States");
        await page.locator("[id='state']").fill("A");
        await page.locator("[id='city']").fill("A");
        await page.locator("[id='zipcode']").fill("A");
        await page.locator("[id='mobile_number']").fill("A");
        await page.locator("[data-qa='create-account']").click();

        await expect(page.getByText("Account Created!")).toHaveText("Account Created!");

        await page.locator("[data-qa='continue-button']").click();


        await expect(page.getByText(" Logged in as " + name)).toHaveText(" Logged in as " + name);

        await page.locator("[href='/delete_account']").click();

        await expect(page.getByText("Account Deleted!")).toHaveText("Account Deleted!");

        await page.locator("[data-qa='continue-button']").click();
        // async function fillForm(name1, email){
        //     await nameInput.fill(name1)
        //     await emailInput.fill(email)
        //     await submitButton.click()
        // }

        // fillForm("nesto", "Nesto@nesto.com")
    })
    
})
