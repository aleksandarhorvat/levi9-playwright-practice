const { test, expect } = require('@playwright/test');
import { ContactUsPage } from '../pages/contactUsPage';

test.describe("Contact Us Form", () => {
    test("Contact Us Form", async ({page}) => {
        var contactUsPage = new ContactUsPage(page);

        await contactUsPage.openApp();

        await expect(page).toHaveURL(contactUsPage.getApplicationUrl());

        await contactUsPage.contactUsButton.click();
        
        await contactUsPage.fillForm("A", "A@A", "A", "A");
        
        await contactUsPage.isFormSubmited();

        await expect(page).toHaveURL(contactUsPage.getApplicationUrl());
    })
})