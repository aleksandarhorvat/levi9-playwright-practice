const { test, expect } = require('@playwright/test');
const { chromium } = require("playwright");
import { ProductsPage } from '../../pages/productsPage';
import { LoginPage } from '../../pages/loginPage';
import { env } from 'process';

test.describe("Search Products and Verify Cart After Login", () => {
    test("Search Products and Verify Cart After Login", async () => {
        const browser = await chromium.launch({ headless: false })
        
        const page = await browser.newPage();

        var productsPage = new ProductsPage(page);
        
        await productsPage.openApp();

        await expect(page).toHaveURL(productsPage.getApplicationUrl());

        await productsPage.productsButton.click();

        await productsPage.allProductsCheck.isVisible();

        await productsPage.searchProduct("Blue");

        await productsPage.addProductsToCart1();

        await productsPage.cartButton.click();

        await expect(page).toHaveURL("https://www.automationexercise.com/view_cart");

        await expect(productsPage.cartContent).toHaveCount(productsPage.countProducts);

        var loginPage = new LoginPage(page);

        await loginPage.linkSingupLogin.click();

        await loginPage.login(env.email, env.password);

        await productsPage.cartButton.click();

        await expect(productsPage.cartContent).toHaveCount(productsPage.countProducts);
    })
})