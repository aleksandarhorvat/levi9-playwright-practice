const { test, expect } = require('@playwright/test');
import { TestCasePage } from '../pages/testCasePage';

test.describe("Verify Test Cases Page", () => {
    test("Verify Test Cases Page", async ({page}) => {
        var testCasePage = new TestCasePage(page);

        await testCasePage.openApp();

        await expect(page).toHaveURL(testCasePage.getApplicationUrl());

        await testCasePage.testCaseButton.click();

        await expect(page).toHaveURL("https://www.automationexercise.com/test_cases");
    })
})