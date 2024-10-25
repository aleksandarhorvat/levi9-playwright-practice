const { test, expect } = require('@playwright/test');

test.describe("Product cart testing", () => {
    
    test("Adding product cart", async ({page}) => {

        await page.goto("https://www.automationexercise.com/")

        // await page.locator('input[data-product-id="1"]').click()

        await page.getByText("submit").click()
        await page.getByRole("button", {name: "Login"}).click()

        await expect(page).toHaveURL("https://www.automationexercise.com/")

    })

    // test("Remove product cart", async ({page}) => {

    // })
})