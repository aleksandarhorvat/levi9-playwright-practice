const { test, expect } = require('@playwright/test');
import { ProductClient } from '../../common/productClient';

test.describe("Validation of product schema", () => {
    test("Validation of product schema", async () => {

        var productClient = new ProductClient();

        var products = await productClient.getAllProducts();

        products = productClient.parseProducts(products);

        for await (const element of products) {
            expect(element.id).not.toBeNull();
            expect(element.name).not.toBeNull();
            expect(element.price).not.toBeNull();
            expect(element.brand).not.toBeNull();
        }
    })
})