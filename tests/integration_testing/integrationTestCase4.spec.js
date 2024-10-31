const { test, expect } = require('@playwright/test');
import { ProductClient } from '../../common/productClient';
const Ajv = require("ajv")

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

    test("Validation of product schema with AJV", async () => {
        const ajv = new Ajv();

        const productClient = new ProductClient();
        const response = await productClient.getAllProducts();

        const schema = require("../../utils/productSchema.json");

        await expect(ajv.validate(schema, response)).toBeTruthy();
    });

})