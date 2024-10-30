const { test, expect } = require('@playwright/test');
import { ProductClient } from '../../common/productClient';

test.describe("Check there are 34 products", () => {
    test("Check there are 34 products", async () => {

        var productClient = new ProductClient();

        var products = await productClient.getAllProducts();

        products = productClient.parseProducts(products);

        await expect(products.length).toEqual(34);
    })
})